"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative flex flex-col items-center justify-center min-h-screen px-10 bg-[#2d2347] text-white overflow-hidden">
      {/* Heading Section */}
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold text-purple-300 text-left w-full max-w-4xl"
      >
        About Me
      </motion.h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 max-w-6xl w-full">
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-300 md:w-1/2"
        >
          <p>
            Hello there, I'm so happy you are here! (: <br />
            My name is <span className="text-purple-400 font-bold">Astha Singh</span>, and I'm a junior Computer Science student based in India. <br />
            I have a strong passion for web development, exploring new technologies, and working with exciting projects.
          </p>
          <p className="mt-4">
            I'm continuously thrilled to partner with individuals and teams who
            wholeheartedly embrace my fervor for crafting extraordinary experiences.
            Your visit to my portfolio is deeply appreciated!
          </p>
        </motion.div>
        
        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-64 h-64 md:w-80 md:h-80 mt-8 md:mt-0 rounded-full overflow-hidden border-4 border-purple-400 shadow-[0_0_50px_rgba(168,85,247,0.5)]"
        >
          <Image 
            src="/profile.jpg" // Replace with actual image path
            alt="Astha Singh"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
