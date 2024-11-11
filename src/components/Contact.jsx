import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import { CONTACT } from '../constants';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.3 } },
};

const Contact = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className=" border-b border-neutral-900 pb-20 px-4"
    >
      <h2 className="my-10 text-center text-4xl">Contact</h2>

      <div className="text-center tracking-tighter">
        <motion.p className="my-4 flex items-center justify-center" variants={containerVariants}>
          <FaMapMarkerAlt className="mr-2" /> {CONTACT.address}
        </motion.p>
        <motion.p className="my-4 flex items-center justify-center" variants={containerVariants}>
          <FaPhone className="mr-2" /> {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          href={`mailto:${CONTACT.email}`}
          className="my-4 flex items-center justify-center"
          variants={containerVariants}
        >
          <FaEnvelope className="mr-2" /> {CONTACT.email}
        </motion.a>
      </div>

      {/* Social Icons centered */}
      <div className="flex justify-center items-center gap-4 text-2xl text-white mt-6">
        <FaLinkedin className="cursor-pointer hover:text-blue-400 transition-colors duration-300" />
        <FaGithub className="cursor-pointer hover:text-blue-400 transition-colors duration-300" />
        <FaInstagram className="cursor-pointer hover:text-blue-400 transition-colors duration-300" />
        <FaTwitterSquare className="cursor-pointer hover:text-blue-400 transition-colors duration-300" />
      </div>
      <div className="flex justify-center items-center mt-10">
  <span className="text-center">All Rights Reserved - 2024 &copy;</span>
</div>

    </motion.div>
  );
};

export default Contact;
