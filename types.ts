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

export interface WorkExperience {
  role: string;
  company: string;
  duration: string;
  tasks: string[];
}

export interface CommunityInvolvement {
  organization: string;
  role: string;
  duration: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
}

export interface Talk {
  title: string;
  event: string;
  date: string;
  url?: string;
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
}
