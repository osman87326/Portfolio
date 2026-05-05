import { projects, Project } from '@/data/projects';
import { notFound } from 'next/navigation';
import ProjectContent from '@/components/ProjectContent';

export const dynamicParams = false;

export async function generateStaticParams() {
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
  const project = projects.find((p: Project) => p.id === id);

  if (!project) {
    return notFound();
  }

  return <ProjectContent project={project} />;
}
