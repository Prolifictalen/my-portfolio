"use client";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-900 text-white text-center">
      <div className="flex justify-center space-x-6 mb-4">
        
        {/* GitHub */}
        <a 
          href="https://github.com/Prolifictalen"
          target="_blank"
          rel="noopener noreferrer"
          className="relative text-gray-400 hover:text-white transition text-2xl"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/astha-singh24" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative text-gray-400 hover:text-white transition text-2xl"
        >
          <FaLinkedin />
        </a>

        {/* Twitter */}
        <a 
          href="https://twitter.com/Prolifictalen" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative text-gray-400 hover:text-white transition text-2xl"
        >
          <FaTwitter />
        </a>

        {/* Instagram */}
        <a 
          href="https://www.instagram.com/prolific_talen_" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative text-gray-400 hover:text-white transition text-2xl"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-sm opacity-75">
        © {new Date().getFullYear()} Astha Singh. All rights reserved.
      </p>
    </footer>
  );
}
