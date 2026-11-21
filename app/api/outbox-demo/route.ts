import { NextRequest, NextResponse } from 'next/server';

/* ─────────────────────────────────────────────
   Types
   ───────────────────────────────────────────── */
interface RateLimitEntry {
  count: number;
  resetTime: number;
}

interface HealthResponse {
  status: 'ok';
  timestamp: string;
  uptime: number;
  node: string;
  rateLimit: {
    limit: number;
    remaining: number;
    resetAt: string;
  };
}

interface EchoRequest {
  message?: string;
  data?: Record<string, unknown>;
}

interface EchoResponse {
  received: EchoRequest;
  processed: {
    messageLength: number | null;
    dataKeys: string[];
    timestamp: string;
  };
}

interface ErrorResponse {
  error: string;
  code: number;
  retryAfter?: number;
}

/* ─────────────────────────────────────────────
   Constants
   ───────────────────────────────────────────── */
const WINDOW_MS = 60_000; // 1-minute window
const MAX_REQUESTS = 10;
const ALLOWED_ORIGIN = 'https://manishshetty.dev';

/* ─────────────────────────────────────────────
   In-memory rate limiter
   Production: use Redis / Upstash / Vercel KV
   ───────────────────────────────────────────── */
const rateLimit = new Map<string, RateLimitEntry>();

function getClientIP(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    '127.0.0.1'
  );
}

function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
  resetTime: number;
} {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  // First request or window expired — create fresh entry
  if (!entry || now > entry.resetTime) {
    const resetTime = now + WINDOW_MS;
    rateLimit.set(ip, { count: 1, resetTime });
    return { allowed: true, remaining: MAX_REQUESTS - 1, resetTime };
  }

  // Within window — increment
  entry.count += 1;

  if (entry.count > MAX_REQUESTS) {
    return { allowed: false, remaining: 0, resetTime: entry.resetTime };
  }

  return {
    allowed: true,
    remaining: MAX_REQUESTS - entry.count,
    resetTime: entry.resetTime,
  };
}

function corsHeaders(): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function rateLimitHeaders(
  remaining: number,
  resetTime: number
): Record<string, string> {
  return {
    'X-RateLimit-Limit': String(MAX_REQUESTS),
    'X-RateLimit-Remaining': String(Math.max(0, remaining)),
    'X-RateLimit-Reset': new Date(resetTime).toISOString(),
  };
}

/* ─────────────────────────────────────────────
   OPTIONS — CORS preflight
   ───────────────────────────────────────────── */
export async function OPTIONS(): Promise<NextResponse> {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(),
  });
}

/* ─────────────────────────────────────────────
   GET — Health check / server info
   ───────────────────────────────────────────── */
export async function GET(request: NextRequest): Promise<NextResponse> {
  const ip = getClientIP(request);
  const { allowed, remaining, resetTime } = checkRateLimit(ip);

  const headers = {
    ...corsHeaders(),
    ...rateLimitHeaders(remaining, resetTime),
  };

  if (!allowed) {
    const retryAfter = Math.ceil((resetTime - Date.now()) / 1000);
    const body: ErrorResponse = {
      error: 'Rate limit exceeded. Please try again later.',
      code: 429,
      retryAfter,
    };
    return NextResponse.json(body, {
      status: 429,
      headers: { ...headers, 'Retry-After': String(retryAfter) },
    });
  }

  const body: HealthResponse = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    node: process.version,
    rateLimit: {
      limit: MAX_REQUESTS,
      remaining,
      resetAt: new Date(resetTime).toISOString(),
    },
  };

  return NextResponse.json(body, { status: 200, headers });
}

/* ─────────────────────────────────────────────
   POST — Echo / validate endpoint
   Demonstrates request validation, error
   handling, and proper HTTP status codes.
   ───────────────────────────────────────────── */
export async function POST(request: NextRequest): Promise<NextResponse> {
  const ip = getClientIP(request);
  const { allowed, remaining, resetTime } = checkRateLimit(ip);

  const headers = {
    ...corsHeaders(),
    ...rateLimitHeaders(remaining, resetTime),
  };

  if (!allowed) {
    const retryAfter = Math.ceil((resetTime - Date.now()) / 1000);
    const body: ErrorResponse = {
      error: 'Rate limit exceeded. Please try again later.',
      code: 429,
      retryAfter,
    };
    return NextResponse.json(body, {
      status: 429,
      headers: { ...headers, 'Retry-After': String(retryAfter) },
    });
  }

  // ── Parse body ──
  let parsed: unknown;
  try {
    parsed = await request.json();
  } catch {
    const body: ErrorResponse = {
      error: 'Invalid JSON in request body.',
      code: 400,
    };
    return NextResponse.json(body, { status: 400, headers });
  }

  // ── Validate schema ──
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    const body: ErrorResponse = {
      error: 'Request body must be a JSON object.',
      code: 400,
    };
    return NextResponse.json(body, { status: 400, headers });
  }

  const input = parsed as EchoRequest;

  if (input.message !== undefined && typeof input.message !== 'string') {
    const body: ErrorResponse = {
      error: '"message" must be a string.',
      code: 400,
    };
    return NextResponse.json(body, { status: 400, headers });
  }

  if (
    input.data !== undefined &&
    (typeof input.data !== 'object' ||
      input.data === null ||
      Array.isArray(input.data))
  ) {
    const body: ErrorResponse = {
      error: '"data" must be a JSON object.',
      code: 400,
    };
    return NextResponse.json(body, { status: 400, headers });
  }

  // ── Build response ──
  const body: EchoResponse = {
    received: {
      message: input.message,
      data: input.data,
    },
    processed: {
      messageLength: input.message?.length ?? null,
      dataKeys: input.data ? Object.keys(input.data) : [],
      timestamp: new Date().toISOString(),
    },
  };

  return NextResponse.json(body, { status: 200, headers });
}
