import logo from "../assets/Mainlogo.png";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

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
          <button
            onClick={handleMenuToggle}
            className="text-white"
          >
            <span className="text-xl">☰</span> {/* This is the hamburger icon */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-neutral-900/80 backdrop-blur-lg`}>
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
      </div>
    </nav>
  );
};

export default Navbar;
