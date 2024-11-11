import { useEffect } from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import ScrollReveal from 'scrollreveal';

const Technologies = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.tech-icon', {
      origin: 'top',
      distance: '50px',
      duration: 800,
      delay: 100,
      opacity: 0,
      scale: 0.8,
      reset: true,
      interval: 300, // This will stagger the animations
    });
  }, []);

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        
        {/* React Icon */}
        <div className="tech-icon rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>

        {/* Next.js Icon */}
        <div className="tech-icon rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl" />
        </div>

        {/* MongoDB Icon */}
        <div className="tech-icon rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-400" />
        </div>

        {/* Redis Icon */}
        <div className="tech-icon rounded-2xl border-4 border-neutral-800 p-4">
          <DiRedis className="text-7xl text-red-700" />
        </div>

        {/* Node.js Icon */}
        <div className="tech-icon rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>

        {/* PostgreSQL Icon */}
        <div className="tech-icon rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
