import About from "../sections/About";
import Contact from "../sections/Contact";
import Skills from "../sections/Skills";
import Hero from "../sections/Hero";
import Projects from "./Projects";
import Experience from "../sections/Experience";

function Home() {
  return (
    <main className="max-w-6xl mx-auto">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

export default Home;