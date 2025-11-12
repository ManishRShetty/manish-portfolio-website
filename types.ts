
export interface Project {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  stack: string[];
  liveDemoUrl?: string;
  codeUrl?: string;
  caseStudy: {
    problem: string;
    solution: string;
    impact: string;
    screenshots: string[];
  };
}
