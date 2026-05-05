import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="lg:ml-20 pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Stats />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

