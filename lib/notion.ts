import { Client } from '@notionhq/client';
import { projectsData as fallbackProjects } from '@/data/projects.json';
import type { Project } from '@/types';

// Helper to extract text from Notion rich text or title array
function getRichText(property: any): string {
  if (!property) return '';
  if (property.type === 'rich_text' && property.rich_text?.length > 0) {
    return property.rich_text.map((t: any) => t.plain_text).join('');
  }
  if (property.type === 'title' && property.title?.length > 0) {
    return property.title.map((t: any) => t.plain_text).join('');
  }
  return '';
}

// Helper to extract file or external image URL
function getFileUrl(property: any): string {
  if (!property) return '';
  if (property.type === 'url' && property.url) {
    return property.url;
  }
  if (property.type === 'files' && property.files?.length > 0) {
    const file = property.files[0];
    return file?.file?.url || file?.external?.url || '';
  }
  return '';
}

// Helper to extract clean UUID from Database ID or full Notion URL
function cleanDatabaseId(rawId: string): string {
  const trimmed = rawId.trim();
  // If user pasted a full URL, extract the ID before ?v= or from the last path segment
  const match = trimmed.match(/([a-f0-9]{32})/i) || trimmed.match(/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/i);
  if (match) {
    return match[1].replace(/-/g, '');
  }
  return trimmed.replace(/-/g, '');
}

export async function getProjects(): Promise<Project[]> {
  const apiKey = process.env.NOTION_API_KEY?.trim();
  const rawDatabaseId = process.env.NOTION_DATABASE_ID?.trim();

  if (!apiKey || !rawDatabaseId) {
    // Graceful fallback when Notion environment variables are not configured
    return fallbackProjects;
  }

  const databaseId = cleanDatabaseId(rawDatabaseId);

  try {
    const res = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
      cache: 'no-store', // Always fetch latest state so removals/additions appear immediately
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error(`Notion API error (${res.status}):`, errText);
      return fallbackProjects;
    }

    const data = await res.json();
    const results = data.results || [];

    // Track all projects present in Notion (both published & unpublished)
    const allNotionTitles = new Set<string>();

    const notionProjects: Project[] = [];

    results.forEach((page: any, index: number) => {
      if (!page || !('properties' in page)) return;
      const props = page.properties;

      // Title
      const titleProp = props.Title || props.Name || props.title;
      const title = getRichText(titleProp) || 'Untitled Project';
      allNotionTitles.add(title.trim().toLowerCase());

      // Published check: If Published checkbox exists and is unchecked, skip it!
      const pubProp = props.Published || props.published;
      if (pubProp && pubProp.type === 'checkbox' && pubProp.checkbox === false) {
        return;
      }

      // Priority (number)
      const priorityProp = props.Priority || props.priority || props.Order;

      // Type (select)
      const typeProp = props.Type || props.type;
      const projectType = (typeProp?.select?.name?.toLowerCase() === 'product' ? 'product' : 'project') as 'product' | 'project';

      // Description
      const descProp = props.Description || props.description;
      const description = getRichText(descProp);

      // Tech Stack (multi_select)
      const stackProp = props['Tech Stack'] || props.Stack || props.stack || props.Tags;
      const stack = stackProp?.multi_select?.map((item: any) => item.name) || [];

      // Thumbnail
      const thumbProp = props.Thumbnail || props.thumbnail || props.Cover || props.Image;
      const thumbnail = getFileUrl(thumbProp) || '/projects/default-cover.webp';

      // Logo
      const logoProp = props.Logo || props.logo;
      const logo = getFileUrl(logoProp) || undefined;

      // Live Demo & Code URLs
      const liveProp = props['Live Demo URL'] || props.LiveDemoUrl || props.Live || props.Demo;
      const liveDemoUrl = liveProp?.url || undefined;

      const codeProp = props['Code URL'] || props.CodeUrl || props.GitHub || props.Code;
      const codeUrl = codeProp?.url || undefined;

      // Case Study fields
      const problemProp = props.Problem || props['Case Study - Problem'];
      const problem = getRichText(problemProp);

      const solutionProp = props.Solution || props['Case Study - Solution'];
      const solution = getRichText(solutionProp);

      const impactProp = props.Impact || props['Case Study - Impact'];
      const impact = getRichText(impactProp);

      // Case Study screenshots
      const screenshotsProp = props.Screenshots || props.screenshots;
      let screenshots: string[] = [];
      if (screenshotsProp?.type === 'files' && screenshotsProp.files?.length > 0) {
        screenshots = screenshotsProp.files.map((f: any) => f?.file?.url || f?.external?.url || '').filter(Boolean);
      }

      notionProjects.push({
        id: page.id || index + 1,
        title,
        logo,
        thumbnail,
        description,
        type: projectType,
        stack,
        liveDemoUrl,
        codeUrl,
        priority: typeof priorityProp?.number === 'number' ? priorityProp.number : undefined,
        caseStudy: {
          problem: problem || 'Real-time performance and scalability challenge.',
          solution: solution || 'Engineered an end-to-end architecture with modern web stacks.',
          impact: impact || 'Deployed to production with high reliability and engagement.',
          screenshots,
        },
      });
    });

    // Merge: Include fallback projects only if they haven't been added/managed in Notion
    const uniqueLocalProjects = fallbackProjects.filter(
      (p) => !allNotionTitles.has(p.title.trim().toLowerCase())
    );

    const mergedProjects = [...notionProjects, ...uniqueLocalProjects];

    // Sort by priority (lowest number = highest priority; undefined priorities keep relative position)
    return mergedProjects.sort((a, b) => {
      const pA = a.priority ?? 999;
      const pB = b.priority ?? 999;
      return pA - pB;
    });
  } catch (error) {
    console.error('Failed to fetch projects from Notion, using fallback data:', error);
    return fallbackProjects;
  }
}
