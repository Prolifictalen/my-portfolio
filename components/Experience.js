"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-10 bg-[#1a1530] text-white text-center">
      {/* Experience Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-purple-400 mb-8 flex items-center justify-center"
      >
        Experience 🚀
      </motion.h2>

      {/* ISRO Experience Card */}
      <motion.div
        className="bg-[#27274d] text-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto text-left border border-purple-400 mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center space-x-4">
          <img
            src="/icons/isro.jpg"
            alt="ISRO Logo"
            className="w-16 h-16"
          />
          <div>
            <h3 className="text-3xl font-bold text-white">Intern - National Remote Sensing Centre, NRSC ISRO</h3>
            <p className="text-lg text-purple-300">National Remote Sensing Centre, Hyderabad</p>
            <p className="text-md text-gray-200 mb-4">June 2024 - July 2024 (On-Site Internship)</p>
          </div>
        </div>

        <ul className="text-gray-200 space-y-2 list-disc pl-6 mt-4">
          <li>Worked on <strong>climate data analytics</strong> using satellite and ground-based observations.</li>
          <li>Developed interactive <strong>map visualizations</strong> using <strong>Leaflet.js</strong>.</li>
          <li>Integrated <strong>PostgreSQL & PostGIS</strong> for geospatial data handling.</li>
          <li>Built <strong>full-stack web apps</strong> to visualize climate trends.</li>
          <li>Conducted <strong>QGIS spatial analysis</strong>.</li>
          <li>Guided by <strong>Mr. Sayed Shadab</strong>, Scientist SE-F, <strong>ECSA Department</strong>.</li>
        </ul>

        <div className="mt-6">
          <p className="text-lg font-semibold text-white">Useful Links:</p>
          <div className="flex flex-wrap justify-start gap-4 mt-2">
            <a href="https://www.nrsc.gov.in" target="_blank" rel="noopener noreferrer"
              className="relative bg-purple-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-900 transition">
              🌍 NRSC ISRO Website
            </a>
            <a href="https://nices.nrsc.gov.in/" target="_blank" rel="noopener noreferrer"
              className="relative bg-purple-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-900 transition">
              📊 NICeS Portal
            </a>
            <a href="https://drive.google.com/file/d/1RdFCuHCxdJBVcf23CbZbTZqCklJUTsZ_/view"
              target="_blank" rel="noopener noreferrer"
              className="relative bg-purple-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-900 transition">
              🎓 Project Certification
            </a>
          </div>
        </div>
      </motion.div>

      {/* Adixoo Internship Card */}
      <motion.div
        className="bg-[#27274d] text-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto text-left border border-purple-400"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center space-x-4">
          {/* <img
            src="/icons/adixoo.jpg" // Replace with correct logo path
            alt="Adixoo Logo"
            className="w-16 h-16"
          /> */}
          <div>
            <h3 className="text-3xl font-bold text-white">Intern-Adixoo Brand Private Limited</h3>
            <p className="text-lg text-purple-300">Python Backend Developer</p>
            <p className="text-md text-gray-200 mb-4">Feb 2025 – Present (Onsite)</p>
          </div>
        </div>

        <ul className="text-gray-200 space-y-2 list-disc pl-6 mt-4">
          <li>Contributing to the development of scalable <strong>Python Project</strong> using <strong>FastAPI</strong> and <strong>Swagger</strong>.</li>
          <li>Integrating third-party services and optimizing backend logic for performance and reliability.</li>
          <li>Working closely with the frontend team to design smooth API contracts.</li>
          <li>Collaborating using <strong>Git, GitHub</strong>, and <strong>Jira</strong>.</li>
          <li>Writing <strong>unit tests</strong> and maintaining code quality standards.</li>
        </ul>
      </motion.div>
    </section>
  );
}
