import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';

export async function generateStaticParams() {
  return projects.map((project: Project) => ({
    id: project.id,
  }));
}

export default function ProjectDetail({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find((p: Project) => p.id === params.id);

  if (!project) {
    return notFound();
  }

  return (
    <div className="bg-surface min-h-screen selection:bg-primary-container selection:text-black">
      <Header />
      <Sidebar />

      <main className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="noise-overlay" />
        
        {/* Back button */}
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          href="/"
          className="inline-flex items-center gap-3 text-primary-container font-bebas text-2xl mb-12 hover:text-white transition-all group"
        >
          <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
          RETURN_TO_BASE
        </motion.a>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT SIDE - Info */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block bg-surface-container-high px-4 py-1 rounded-full border border-white/10 text-xs font-bold tracking-[0.3em] text-primary-container uppercase"
              >
                {project.subtitle}
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-bebas text-7xl lg:text-[10rem] text-white leading-[0.8] tracking-tighter uppercase"
              >
                {project.name.split('_')[0]}<br />
                <span className="text-primary-container">{project.name.split('_')[1] || ''}</span>
              </motion.h1>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-8 text-on-surface-variant text-xl leading-relaxed font-inter"
            >
              <p className="border-l-4 border-primary-container pl-8 py-2 bg-surface-container-high/30 p-8 neo-border border-white/5">
                {project.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                <div className="space-y-6">
                  <h3 className="font-bebas text-3xl text-white uppercase border-b border-white/10 pb-2">TECH_STACK</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-surface-container neo-border text-sm font-bold text-on-surface-variant"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="font-bebas text-3xl text-white uppercase border-b border-white/10 pb-2">LINKS</h3>
                  <div className="flex flex-col gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="flex items-center justify-between bg-white text-black px-6 py-4 font-bebas text-2xl neo-border neo-shadow hover:translate-y-1 transition-all"
                    >
                      LIVE_DEPLOYMENT
                      <span className="material-symbols-outlined">open_in_new</span>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="flex items-center justify-between bg-black text-white px-6 py-4 font-bebas text-2xl neo-border neo-shadow-primary hover:translate-y-1 transition-all"
                    >
                      GITHUB_CLIENT
                      <span className="material-symbols-outlined">code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Visuals & Extras */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="neo-border neo-shadow-primary overflow-hidden group aspect-video relative"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-surface-container-high neo-border border-l-8 border-l-error relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <span className="material-symbols-outlined text-6xl text-error">warning</span>
              </div>
              <h3 className="font-bebas text-4xl text-error mb-4 uppercase tracking-wider">CRITICAL_CHALLENGES</h3>
              <p className="text-on-surface-variant leading-relaxed">
                {project.challenges}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-surface-container-high neo-border border-l-8 border-l-primary-container relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <span className="material-symbols-outlined text-6xl text-primary-container">trending_up</span>
              </div>
              <h3 className="font-bebas text-4xl text-primary-container mb-4 uppercase tracking-wider">FUTURE_EVOLUTION</h3>
              <p className="text-on-surface-variant leading-relaxed">
                {project.futurePlans}
              </p>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
