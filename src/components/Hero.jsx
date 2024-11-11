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
    <div className="mt-20 pt-10 border-b border-neutral-900 pb-8 lg:mb-35">
      <div className="flex flex-wrap justify-center items-center lg:justify-between">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
        {/* Profile Image */}
        <div className="w-full lg:w-1/2 px-4 lg:p-0 lg:mt-0 flex justify-center lg:justify-end">
          <motion.img
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }} // Delayed for 0.8s
            src={profilePic}
            alt="Bernie Cherry Rante"
            className="mt-5 mb-5 w-3/4 sm:w-2/3 lg:w-full rounded-md block lg:hidden xl:hidden sm:hidden" // Hide on small screens, show on lg and up
          />
        </div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Header */}
            <motion.h1
              variants={container(0.2)} // 0.2s delay
              initial="hidden"
              animate="visible"
              className="pb-4 text-4xl font-thin tracking-tight lg:mt-10 lg:text-6xl" // Adjusted font size
            >
              BERNIE CHERRY RANTE
            </motion.h1>

            {/* Role */}
            <motion.span
              variants={container(0.4)} // 0.4s delay
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight"
            >
              Junior Web Developer
            </motion.span>

            {/* Description */}
            <motion.p
              variants={container(0.6)} // 0.6s delay
              initial="hidden"
              animate="visible"
              className="my-4 max-w-lg py-4 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-full lg:w-1/2 px-4 lg:p-0 lg:mt-0 flex justify-center lg:justify-end">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }} // Delayed for 0.8s
            src={profilePic}
            alt="Bernie Cherry Rante"
            className="w-3/4 sm:w-2/3 lg:w-full rounded-md hidden lg:block" // Hide on small screens, show on lg and up
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

