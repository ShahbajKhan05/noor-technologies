
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Projects from "./components/projects";
import PortfolioSection from "./components/PortfolioSection";
import Contact from "./components/contact";
import Menu from "./components/menu";
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-white text-[#111111]">
    

      {/* Hero */}
      <section id="home">
        <Hero />
      </section>

      {/* Portfolio */}
      <section id="PortfolioSection">
        <PortfolioSection />
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

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>

      {/* MENU */}
      <section id="menu">
        <Menu/>
      </section>
    </main>
  );
}
