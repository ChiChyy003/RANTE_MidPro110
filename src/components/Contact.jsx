import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
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
      className="border-b border-neutral-900 pb-20"
    >
      <h2 className="my-10 text-center text-4xl">Contact</h2>

      <div className="text-center tracking-tighter">
        <motion.p className="my-4 flex items-center justify-center" variants={containerVariants}>
          <FaMapMarkerAlt className="mr-2" /> {CONTACT.address}
        </motion.p>
        <motion.p className="my-4 flex items-center justify-center" variants={containerVariants}>
          <FaPhone className="mr-2" /> {CONTACT.phoneNo}
        </motion.p>
        <motion.a href="#" className="my-4 flex items-center justify-center border" variants={containerVariants}>
          <FaEnvelope className="mr-2" /> {CONTACT.email}
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Contact;
