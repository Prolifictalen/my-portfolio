"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Giggles & Growth",
    subtitle: "Infant Care Web Application",
    timeline: "June '23 - Dec '23",
    description:
      "A comprehensive platform designed to assist parents in managing their child's healthcare and development. Features include a dynamic vaccine chart based on WHO guidelines, child nutrition blogs and external shopping links. The system has significantly improved healthcare for new parents.",
    bg: "bg-purple-600",
    demoLink: "https://infactcare.vercel.app/", // Replace with actual deployment link
  },
  {
    title: "LensLoom",
    subtitle: "E-Commerce Web App",
    timeline: "Aug '24 - Oct '24",
    description:
      "An e-commerce platform inspired by Lenskart’s functionality, allowing users to browse eyewear, check frames, and place orders. It includes user authentication, seamless cart management, and an interactive UI. Built with ReactJS, NodeJS, HTML, and CSS to enhance the online shopping experience.",
    bg: "bg-blue-600",
    demoLink: "https://lens-ashy.vercel.app/", // Replace with actual deployment link
  },
  {
    title: "Upskill Educational Website",
    subtitle: "Online Learning Platform",
    timeline: "Jan '24 - May '24",
    description:
      "A dynamic online learning platform offering students access to curated courses and video content. Integrated user authentication ensures secure logins, while APIs dynamically fetch learning resources, enhancing the user experience. Provides an intuitive dashboard for both learners and instructors.",
    bg: "bg-green-600",
    demoLink: null,
  },
  {
    title: "BudgetEase",
    subtitle: "Expense Management System",
    timeline: "Ongoing (Data Analytics Project)",
    description:
      "A financial planning tool that allows users to efficiently track, analyze, and optimize their spending habits. It integrates data visualization dashboards, predictive analytics for budgeting trends, and AI-powered expense categorization using machine learning. Features a ReactJS-based user interface with PostgreSQL for secure data storage.",
    bg: "bg-yellow-600",
    demoLink: null,
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <motion.section
      id="projects"
      className="py-20 px-10 text-white bg-gray-900 overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-purple-400 text-left mb-10"
      >
        Projects
      </motion.h2>

      {/* Scrollable Project Cards */}
      <div className="relative flex space-x-6 overflow-x-scroll scrollbar-hide p-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`relative min-w-[350px] h-96 rounded-lg p-6 ${project.bg} flex flex-col justify-between transition-transform duration-500 ease-in-out cursor-pointer shadow-xl ${
              activeIndex === index ? "scale-110" : "scale-100"
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold">{project.title}</h3>
            <h4 className="text-lg text-gray-200">{project.subtitle}</h4>
            <p className="text-sm text-gray-300 mt-2">{project.timeline}</p>
            <p className="text-md text-gray-300 mt-2">{project.description}</p>

            {/* Conditionally Render Demo Button */}
            {project.demoLink && (
  <a
    href={project.demoLink}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg hover:scale-105 hover:shadow-purple-500/50 transition-transform duration-300 ease-in-out"
  >
    <span>🔗 See the Demo</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L14 5.414V15a1 1 0 11-2 0V5.414L9.707 7.707a1 1 0 01-1.414-1.414l4-4z"
        clipRule="evenodd"
      />
    </svg>
  </a>
)}

          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
