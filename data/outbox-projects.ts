import projectsJson from './outbox-projects.json';

export interface OutboxProjectStack {
  name: string;
  version?: string;
}

export interface OutboxProjectLinks {
  live?: string;
  github?: string;
  apiDocs?: string;
  testCoverage?: string;
}

export interface OutboxProjectHardProblem {
  title: string;
  description: string;
}

export interface OutboxProject {
  id: string;
  title: string;
  myRole: string;
  relevance: string;
  problem: string;
  architecture: string;
  stack: OutboxProjectStack[];
  hardProblem: OutboxProjectHardProblem;
  measurableResult: string;
  links: OutboxProjectLinks;
}

export const outboxProjects: OutboxProject[] = projectsJson as OutboxProject[];
