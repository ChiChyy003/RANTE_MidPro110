import logo from "../assets/Mainlogo.png";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Make sure the menu starts closed

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-neutral-900/80 backdrop-blur-lg">
      <div className="flex items-center justify-between px-4 py-3 mx-auto w-full max-w-screen-xl">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img className="w-20" src={logo} alt="logo" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-white">
          {['Hero', 'About', 'Experience', 'Projects', 'Certificates', 'Technologies', 'Contact'].map((section) => (
            <Link
              key={section}
              to={`/${section.toLowerCase()}`}
              className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
            >
              {section}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <motion.button
            onClick={handleMenuToggle}
            className="text-white"
            initial={{ rotate: 0, scale: 1 }} // Initial rotation and scale
            animate={{
              rotate: isMenuOpen ? 90 : 0, // Rotate the icon when menu opens and closes
              scale: isMenuOpen ? 1.2 : 1, // Slightly enlarge the icon on open for effect
            }}
            transition={{
              duration: 0.5, // Slow down the transition duration
              ease: "easeInOut", // Smoother transition easing
            }}
          >
            <span className="text-xl">☰</span> {/* This is the hamburger icon */}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu with Sliding and Fading Effect */}
      <motion.div
  className="md:hidden bg-neutral-900/80 backdrop-blur-lg"
  initial={{ opacity: 0, y: -40 }} // Start off-screen and hidden
  animate={{
    opacity: isMenuOpen ? 1 : 0, // Fade in and out when opening and closing
    y: isMenuOpen ? 0 : -40, // Slide in and out when opening and closing
  }}
  transition={{
    opacity: { duration: 0.3 }, // Adjust duration for fading effect
    y: { type: "spring", stiffness: 150, damping: 25 }, // Smoother sliding effect
  }}
  style={{
    display: isMenuOpen ? 'block' : 'none', // Ensure menu is hidden when closed
  }}
>
  <div className="flex flex-col items-center space-y-4 py-4 text-white">
    {['Hero', 'About', 'Experience', 'Projects', 'Certificates', 'Technologies', 'Contact'].map((section) => (
      <Link
        key={section}
        to={`/${section.toLowerCase()}`}
        className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
        onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
      >
        {section}
      </Link>
    ))}
    {/* Social Icons in Mobile */}
    <div className="flex gap-4 text-2xl">
      <FaLinkedin className="cursor-pointer hover:text-blue-400 transition-colors duration-300" />
      <FaGithub className="cursor-pointer hover:text-blue-400 transition-colors duration-300" />
      <FaInstagram className="cursor-pointer hover:text-blue-400 transition-colors duration-300" />
      <FaTwitterSquare className="cursor-pointer hover:text-blue-400 transition-colors duration-300" />
    </div>
  </div>
</motion.div>

    </nav>
  );
};

export default Navbar;
