import React from 'react';
import { getProjects } from '@/lib/notion';
import { PortfolioView } from '@/components/PortfolioView';

// Revalidate project data every 60 seconds (Incremental Static Regeneration)
export const revalidate = 60;

export default async function Page() {
  const projects = await getProjects();

  return <PortfolioView initialProjects={projects} />;
}
