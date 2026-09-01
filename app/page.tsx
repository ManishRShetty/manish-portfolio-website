import React from 'react';
import { getProjects } from '@/lib/notion';
import { PortfolioView } from '@/components/PortfolioView';

// Force dynamic so additions, edits, or removals in Notion reflect immediately
export const dynamic = 'force-dynamic';

export default async function Page() {
  const projects = await getProjects();

  return <PortfolioView initialProjects={projects} />;
}
