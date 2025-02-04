"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="relative bg-darkBg text-white">
      {/* Background Animation */}
      <Background />

      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-[#2d2347] to-[#1a1530] text-white overflow-hidden">
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        
      </div>

      {/* Title Animation */}
      <motion.h1
        initial={{ opacity: 0, y: 50, rotate: -5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1 }}
        className="text-[6rem] font-extrabold text-purple-300 tracking-wide uppercase leading-tight drop-shadow-md"
        style={{ fontFamily: "'Bangers', cursive" }} // Unique comic-like font
      >
        Who's Astha?
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-2xl text-gray-200 mt-4 font-semibold"
      >
        Software Developer | Web Enthusiast
      </motion.p>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-8 bg-darkBg">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-8 bg-gray-900">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-8 bg-darkBg">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 bg-darkBg">
        <Contact />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
