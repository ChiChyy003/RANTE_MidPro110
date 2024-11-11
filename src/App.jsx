import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Technologies from './components/Technologies';
import Contact from './components/Contact';

const App = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: true,
    });

    sr.reveal('#hero');
    sr.reveal('#about', { delay: 300 });
    sr.reveal('#experience', { delay: 400 });
    sr.reveal('#projects', { delay: 500 });
    sr.reveal('#certificates', { delay: 600 });
    sr.reveal('#technologies', { delay: 700 });
    sr.reveal('#contact', { delay: 800 });
  }, []);

  return (
    <div className="overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />

        {/* Main Sections */}
        <section id="hero" className="min-h-screen overflow-y-auto">
          <Hero />
        </section>
        <section id="about" className="min-h-screen overflow-y-auto">
          <About />
        </section>
        <section id="experience" className="min-h-screen overflow-y-auto">
          <Experience />
        </section>
        <section id="projects" className="min-h-screen overflow-y-auto">
          <Projects />
        </section>
        <section id="certificates" className="min-h-screen overflow-y-auto">
          <Certificates />
        </section>
        <section id="technologies" className="min-h-screen overflow-y-auto">
          <Technologies />
        </section>
        <section id="contact" className="min-h-screen overflow-y-auto">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
