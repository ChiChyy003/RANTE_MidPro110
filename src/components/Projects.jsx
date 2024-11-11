import { PROJECTS } from '../constants';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    // Apply ScrollReveal to each project item with stagger effect
    ScrollReveal().reveal('.project-item', {
      distance: '50px',
      origin: 'left',
      opacity: 0,
      duration: 600,
      easing: 'ease-out',
      interval: 300, // Mimic staggerChildren
      reset:true,
    });
  }, []);

  return (
    <div className="overflow-hidden border-b border-neutral-900 pb-24 mt-10">
      <h2 className="mb-10 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="project-item mb-8 flex flex-wrap lg:justify-center transition-transform duration-300 ease-out hover:scale-105" // Hover scale effect on item
          >
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={300}
                height={300}
                alt={project.title}
                className="mb-6 rounded transition-transform duration-300 ease-out hover:rotate-5" // Hover rotation effect on image
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 transition-transform duration-200 ease-out hover:scale-110" // Hover scale effect on technologies
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
