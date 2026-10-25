import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Projects from "./components/projects";
import PortfolioSection from "./components/PortfolioSection";
import Process from "./components/process";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#111111]">
      {/* Hero */}
      <section id="home">
        <Hero />
      </section>

     {/* Portfolio */ }
     <section id="PortfolioSection">
     <PortfolioSection/>
     </section>

      {/* About Noor Technologies */}
      <section id="about">
        <About />
      </section>

      {/* Our Services */}
      <section id="services">
        <Services />
      </section>

      {/* Selected Projects */}
      <section id="projects">
        <Projects />
      </section>

      {/* Our Process */}
      <Process />

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}