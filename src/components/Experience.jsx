import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experience = () => {
  const containerVariants = (direction) => ({
    hidden: direction === 'left' ? { opacity: 0, x: -100 } : { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="border-b border-neutral-900 pb-24"
    >
      <h2 className="my-20 mt-20 pt-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            variants={containerVariants(index % 2 === 0 ? 'left' : 'right')} // Alternating sides for animation
            initial="hidden"
            animate="visible"
            className="mb-8 flex flex-col lg:flex-row lg:justify-center" // Use flex-col on small screens, flex-row on larger screens
            whileHover={{ scale: 1.02 }} // Slight hover effect
          >
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0"> {/* Ensure proper spacing for smaller screens */}
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{' '}
                <span className="text-sm text-purple-100">{experience.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <div className="flex flex-wrap"> {/* Wrap technologies for responsiveness */}
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
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
