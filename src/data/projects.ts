export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  challenges: string;
  futurePlans: string;
}

export const projects: Project[] = [];
