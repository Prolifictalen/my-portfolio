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
    <div className="relative bg-[#1a1530] text-white min-h-screen">
      {/* Particles Background for Entire Website */}
      <div className="fixed inset-0 w-full h-full z-0">
        <ParticlesBackground />
      </div>

      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1 }}
          className="text-[6rem] font-extrabold text-purple-300 tracking-wide uppercase leading-tight drop-shadow-md"
          style={{ fontFamily: "'Bangers', cursive" }}
        >
          Who's Astha?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl text-gray-200 mt-4 font-semibold"
        >
          Software Developer | Web Enthusiast
        </motion.p>
      </section>

      {/* Other Sections Without Extra Containers */}
      <section id="about" className="py-16 px-8">
        <About />
      </section>

      <section id="experience" className="relative py-16 px-8">
  {/* Ensures the particles remain in the background */}
  <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
    <ParticlesBackground />
  </div>

  {/* Content Wrapper - Ensures text is above particles */}
  <div className="relative z-10">
    <Experience />
  </div>
</section>


      <section id="skills" className="py-16 px-8">
        <Skills />
      </section>

      <section id="projects" className="py-16 px-8">
        <Projects />
      </section>

      <section id="contact" className="py-16 px-8">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
