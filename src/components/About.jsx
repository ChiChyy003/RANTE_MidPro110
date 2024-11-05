import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Motion variants for container and elements
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Ensures animation only triggers once

  return (
    <div
      className="border-b border-neutral-900 pb-4"
      ref={ref}
    >
      {/* Heading */}
      <motion.h1
        className="my-20 text-center text-4xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>

      {/* Content container */}
      <div className="flex flex-wrap">
        {/* Image with scroll animation */}
        <motion.div
          className="w-full lg:w-1/2 lg:p-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center">
            <motion.img
              className="rounded-2xl"
              src={aboutImg}
              alt="about"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Text with scroll animation */}
        <motion.div
          className="w-full lg:w-1/2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="flex justify-center lg:justify-start">
            <motion.p
              className="my-2 max-w-xl py-6"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
