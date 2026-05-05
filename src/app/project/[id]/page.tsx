import { projects, Project } from '@/data/projects';
import { notFound } from 'next/navigation';
import ProjectContent from '@/components/ProjectContent';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  // If no projects exist, return a dummy ID to satisfy Next.js build requirement
  // for static export on dynamic routes.
  if (projects.length === 0) {
    return [{ id: 'null' }];
  }
  
  return projects.map((project: Project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  // Always check the real data array
  const project = projects.find((p: Project) => p.id === id);

  if (!project) {
    return notFound();
  }

  return <ProjectContent project={project} />;
}
