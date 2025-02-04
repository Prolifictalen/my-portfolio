"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Infant Care Web App",
    subtitle: "Giggles & Growth",
    description: "A platform helping parents manage their child's vaccine schedules, leading to a 20% increase in user engagement.",
    bg: "bg-purple-600",
  },
  {
    title: "LensLoom",
    subtitle: "A Website Clone ",
    description: "A deep learning project that colorizes grayscale images into realistic colors with advanced neural networks.",
    bg: "bg-blue-600",
  },
  {
    title: "Upskill Educational Website",
    subtitle: "E-Learning Platform",
    description: "An online platform for learners to access courses and for instructors to manage and publish educational content efficiently.",
    bg: "bg-green-600",
  },
  {
    title: "BudgetEase",
    subtitle: "Smart Expense Tracker",
    description: "A financial planning app assisting users in tracking expenses and improving savings habits through smart analytics.",
    bg: "bg-yellow-600",
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="projects" className="py-20 px-10 text-white bg-gray-900 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-purple-400 text-left mb-10"
      >
        Projects
      </motion.h2>

      <div className="relative flex space-x-6 overflow-x-scroll scrollbar-hide p-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`relative min-w-[300px] h-80 rounded-lg p-6 ${project.bg} flex flex-col justify-between transition-transform duration-500 ease-in-out cursor-pointer shadow-xl ${activeIndex === index ? 'scale-110' : 'scale-100'}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <h4 className="text-lg text-gray-200">{project.subtitle}</h4>
            <p className="text-sm text-gray-300 mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
