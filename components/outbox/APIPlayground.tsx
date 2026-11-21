'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, ShieldCheck, Terminal, AlertCircle } from 'lucide-react';

interface ResponseState {
  status: number | null;
  statusText: string;
  timeMs: number | null;
  headers: Record<string, string>;
  data: unknown;
  error?: string;
}

export const APIPlayground: React.FC = () => {
  const [activeMethod, setActiveMethod] = useState<'GET' | 'POST'>('GET');
  const [postBody, setPostBody] = useState<string>(
    JSON.stringify(
      {
        message: 'Hello Outbox Labs',
        data: {
          role: 'SDE Intern',
          focus: 'Node.js Backend & Systems',
        },
      },
      null,
      2
    )
  );

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<ResponseState | null>(null);

  const handleSend = async () => {
    setIsLoading(true);
    const startTime = performance.now();

    try {
      let res: Response;
      if (activeMethod === 'GET') {
        res = await fetch('/api/outbox-demo', {
          method: 'GET',
          cache: 'no-store',
        });
      } else {
        // Validate JSON before sending
        let parsed: unknown;
        try {
          parsed = JSON.parse(postBody);
        } catch {
          setResponse({
            status: 400,
            statusText: 'Client-side Validation Error',
            timeMs: 0,
            headers: {},
            data: { error: 'Invalid JSON payload in client editor before sending.' },
          });
          setIsLoading(false);
          return;
        }

        res = await fetch('/api/outbox-demo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(parsed),
        });
      }

      const elapsed = Math.round(performance.now() - startTime);
      const json = await res.json();

      const headers: Record<string, string> = {};
      res.headers.forEach((val, key) => {
        if (key.toLowerCase().includes('ratelimit') || key.toLowerCase() === 'content-type') {
          headers[key] = val;
        }
      });

      setResponse({
        status: res.status,
        statusText: res.statusText || (res.status === 200 ? 'OK' : 'Error'),
        timeMs: elapsed,
        headers,
        data: json,
      });
    } catch (err: unknown) {
      const elapsed = Math.round(performance.now() - startTime);
      setResponse({
        status: 500,
        statusText: 'Network Error',
        timeMs: elapsed,
        headers: {},
        data: { error: err instanceof Error ? err.message : 'Unknown network failure' },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="api-playground"
      aria-labelledby="playground-heading"
      className="py-20 md:py-32 bg-black text-white px-6 border-t border-neutral-900"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center md:text-left mb-10">
          <div className="inline-block">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Interactive Verification
            </span>
          </div>
          <h2
            id="playground-heading"
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-1"
          >
            Live API Playground
          </h2>
          <p className="text-neutral-400 text-sm md:text-base mt-2 max-w-2xl">
            Live Node.js + TypeScript endpoint running on this server. Demonstrates HTTP response handling,
            schema validation, and an active in-memory token-bucket rate limiter (10 req/min/IP).
          </p>
        </div>

        {/* Playground Container */}
        <div className="rounded-3xl border border-white/10 bg-[#09090B] overflow-hidden shadow-2xl">
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveMethod('GET')}
                className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-bold transition-all ${
                  activeMethod === 'GET'
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'text-neutral-400 hover:text-white bg-transparent'
                }`}
              >
                GET /api/outbox-demo
              </button>
              <button
                type="button"
                onClick={() => setActiveMethod('POST')}
                className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-bold transition-all ${
                  activeMethod === 'POST'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'text-neutral-400 hover:text-white bg-transparent'
                }`}
              >
                POST /api/outbox-demo
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleSend}
                disabled={isLoading}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white text-black hover:bg-neutral-200 font-semibold text-xs tracking-tight transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                {isLoading ? (
                  <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-current" />
                )}
                <span>{isLoading ? 'Executing...' : 'Send Request'}</span>
              </button>
            </div>
          </div>

          {/* Grid Layout: Request on Left, Response on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Request Pane */}
            <div className="p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span className="uppercase tracking-wider">Request Spec</span>
                <span className="text-[11px] text-neutral-500">
                  {activeMethod === 'GET' ? 'No Payload' : 'application/json'}
                </span>
              </div>

              {activeMethod === 'GET' ? (
                <div className="p-4 rounded-xl bg-black/60 border border-white/5 font-mono text-xs text-neutral-400 space-y-2">
                  <p className="text-neutral-300 font-semibold">GET Request Properties:</p>
                  <ul className="space-y-1 text-[11px] list-disc list-inside text-neutral-400">
                    <li>Tests runtime health and process uptime</li>
                    <li>Inspects Node.js runtime version</li>
                    <li>Evaluates IP client bucket remaining requests</li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-2">
                  <label htmlFor="post-body-input" className="text-xs font-mono text-neutral-400 block">
                    Payload Body (Editable):
                  </label>
                  <textarea
                    id="post-body-input"
                    rows={8}
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                    className="w-full p-3 rounded-xl bg-black border border-white/10 font-mono text-xs text-neutral-200 focus:outline-none focus:border-blue-500/50 resize-none"
                    spellCheck={false}
                  />
                </div>
              )}

              {/* Rate Limit Info Pill */}
              <div className="flex items-start gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Rate-limiter enforces a strict 10 requests / minute window per IP, returning standard{' '}
                  <code className="text-neutral-300">429 Too Many Requests</code> and{' '}
                  <code className="text-neutral-300">Retry-After</code> headers when exceeded.
                </span>
              </div>
            </div>

            {/* Response Pane */}
            <div className="p-5 sm:p-6 space-y-4 bg-black/40">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400 uppercase tracking-wider">Response Inspector</span>
                {response && (
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                        response.status === 200
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : response.status === 429
                          ? 'bg-amber-500/20 text-amber-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {response.status} {response.statusText}
                    </span>
                    <span className="text-neutral-500 text-[11px] font-mono">
                      {response.timeMs}ms
                    </span>
                  </div>
                )}
              </div>

              {response ? (
                <div className="space-y-3">
                  {/* Rate limit headers strip */}
                  {Object.keys(response.headers).length > 0 && (
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 font-mono text-[11px] text-neutral-400 space-y-1">
                      {Object.entries(response.headers).map(([key, val]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-neutral-500">{key}:</span>
                          <span className="text-neutral-300">{val}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Body JSON Output */}
                  <pre className="p-4 rounded-xl bg-black border border-white/5 font-mono text-xs text-emerald-400 overflow-x-auto max-h-64 whitespace-pre-wrap leading-relaxed">
                    {JSON.stringify(response.data, null, 2)}
                  </pre>
                </div>
              ) : (
                <div className="p-8 rounded-xl border border-dashed border-white/10 text-center text-neutral-500 font-mono text-xs flex flex-col items-center justify-center gap-2 min-h-[220px]">
                  <Terminal className="w-6 h-6 opacity-40" />
                  <span>Click &quot;Send Request&quot; to ping the live endpoint</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
