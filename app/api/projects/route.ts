import { NextResponse } from 'next/server';
import { getProjects } from '@/lib/notion';

export const revalidate = 60; // Auto-revalidate cache every 60 seconds

export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json({ success: true, projects }, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      },
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch projects' }, { status: 500 });
  }
}
