import { EXPERIENCES } from '../constants';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

const Experience = () => {
  useEffect(() => {
    // Apply ScrollReveal to each experience item
    ScrollReveal().reveal('.experience-item', {
      distance: '50px',
      origin: 'left',
      opacity: 0,
      duration: 800,
      easing: 'ease-out',
      interval: 200, // Stagger each item slightly
      reset:true,
    });
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-24 overflow-hidden">
      <h2 className="my-10 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="experience-item mb-8 flex flex-col lg:flex-row lg:justify-center transition-transform duration-300 ease-out hover:scale-105" // Hover effect here
          >
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{' '}
                <span className="text-sm text-purple-100">{experience.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
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

export default Experience;
