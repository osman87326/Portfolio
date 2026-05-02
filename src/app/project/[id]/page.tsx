import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetail({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return notFound();
  }

  return (
    <div className="bg-surface min-h-screen">
      <Header />

      <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
        {/* Back button */}
        <a
          href="/"
          className="flex items-center gap-2 text-primary-container font-bebas text-2xl mb-12 hover:text-white transition-colors"
        >
          ← RETURN_TO_HOME
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <h1 className="font-bebas text-6xl lg:text-8xl text-white leading-none tracking-tighter">
              {project.name}
            </h1>

            <div className="inline-block bg-primary-container text-black px-4 py-1 neo-border font-bebas text-xl">
              {project.subtitle}
            </div>

            <p className="text-on-surface-variant text-xl leading-relaxed">
              {project.description}
            </p>

            {/* TECH STACK */}
            <div className="space-y-4">
              <h3 className="font-bebas text-3xl text-primary-container">
                TECH_STACK
              </h3>

              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 bg-surface-container neo-border text-sm font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* LINKS */}
            <div className="flex gap-6 pt-8">
              <a
                href={project.liveLink}
                target="_blank"
                className="flex-1 bg-white text-black text-center py-4 font-bebas text-2xl neo-border neo-shadow hover:translate-y-1 transition-all"
              >
                LIVE_ACCESS
              </a>

              <a
                href={project.githubLink}
                target="_blank"
                className="flex-1 bg-black text-white text-center py-4 font-bebas text-2xl neo-border neo-shadow-primary hover:translate-y-1 transition-all"
              >
                SOURCE_CODE
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-12">
            <div className="neo-border neo-shadow-primary overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* CHALLENGES */}
            <div className="p-8 bg-surface-container-high neo-border border-l-8 border-l-error">
              <h3 className="font-bebas text-3xl text-error mb-4">
                CRITICAL_CHALLENGES
              </h3>
              <p className="text-on-surface-variant">
                {project.challenges}
              </p>
            </div>

            {/* FUTURE */}
            <div className="p-8 bg-surface-container-high neo-border border-l-8 border-l-primary-container">
              <h3 className="font-bebas text-3xl text-primary-container mb-4">
                FUTURE_EVOLUTION
              </h3>
              <p className="text-on-surface-variant">
                {project.futurePlans}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
