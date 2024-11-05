import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            
            {/* Header */}
            <motion.h1
              variants={container(0.2)} // 0.2s delay
              initial="hidden"
              animate="visible"
              className="pb-10 text-5xl font-thin tracking-tight lg:mt-10 lg:text-7xl" // Reduced font size
            >
              BERNIE CHERRY RANTE
            </motion.h1>

            {/* Role */}
            <motion.span
              variants={container(0.4)} // 0.4s delay
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight"
            >
              Junior Web Developer
            </motion.span>

            {/* Description */}
            <motion.p
              variants={container(0.6)} // 0.6s delay
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

          </div>
        </div>

        {/* Profile Image */}
        <div className="w-full lg:w-1/2 lg:p-0 lg:-mt-20"> {/* Adjusted with negative top margin */}
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }} // Delayed for 0.8s
              src={profilePic}
              alt="Bernie Cherry Rante"
              className="w-3/4 lg:w-full" // Adjusted to make the image larger
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
