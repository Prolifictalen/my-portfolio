"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Home() {
  return (
    <div className="relative bg-[#1a1530] text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section with Particles */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden">
        
        {/* Particles Background Positioned Correctly */}
        <div className="absolute inset-0">
          <ParticlesBackground />
        </div>

        {/* Text Content */}
        <motion.h1
          initial={{ opacity: 0, y: 50, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1 }}
          className="text-[6rem] font-extrabold text-purple-300 tracking-wide uppercase leading-tight drop-shadow-md relative z-10"
          style={{ fontFamily: "'Bangers', cursive" }}
        >
          Who's Astha?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl text-gray-200 mt-4 font-semibold relative z-10"
        >
          Software Developer | Web Enthusiast
        </motion.p>
      </section>

      {/* Other Sections */}
      <section id="about" className="py-16 px-8 bg-[#1a1530]">
        <About />
      </section>

      <section id="experience" className="py-16 px-8 bg-[#1a1530]">
        <Experience />
      </section>

      <section id="skills" className="py-16 px-8 bg-[#1a1530]">
        <Skills />
      </section>

      <section id="projects" className="py-16 px-8 bg-[#1a1530]">
        <Projects />
      </section>

      <section id="contact" className="py-16 px-8 bg-[#1a1530]">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
