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
    demoLink: "https://infactcare.vercel.app/",
  },
  {
    title: "LensLoom",
    subtitle: "E-Commerce Web App",
    timeline: "Aug '24 - Oct '24",
    description:
      "An e-commerce platform inspired by Lenskart’s functionality, allowing users to browse eyewear, check frames, and place orders. It includes user authentication, seamless cart management, and an interactive UI. Built with ReactJS, NodeJS, HTML, and CSS to enhance the online shopping experience.",
    bg: "bg-blue-600",
    demoLink: "https://lens-ashy.vercel.app/",
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
  // {
  //   title: "BudgetEase",
  //   subtitle: "Expense Management System",
  //   timeline: "Ongoing (Data Analytics Project)",
  //   description:
  //     "A financial planning tool that allows users to efficiently track, analyze, and optimize their spending habits. It integrates data visualization dashboards, predictive analytics for budgeting trends, and AI-powered expense categorization using machine learning. Features a ReactJS-based user interface with PostgreSQL for secure data storage.",
  //   bg: "bg-yellow-600",
  //   demoLink: null,
  // },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <motion.section
      id="projects"
      className="py-20 px-4 sm:px-6 md:px-10 text-white bg-gray-900 overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-purple-400 text-center mb-8"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`p-4 sm:p-6 rounded-lg shadow-lg ${project.bg} transition-transform duration-500 ease-in-out cursor-pointer ${
              activeIndex === index ? "scale-105" : "scale-100"
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <h4 className="text-lg text-gray-200">{project.subtitle}</h4>
            <p className="text-sm text-gray-300 mt-2">{project.timeline}</p>
            <p className="text-sm text-gray-300 mt-2">{project.description}</p>

            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-indigo-500 hover:bg-purple-500 text-white py-2 px-4 rounded transition-transform hover:scale-105"
              >
                See the Demo
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
