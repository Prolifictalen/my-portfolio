"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-10 bg-#1a1530 text-white text-center">
      {/* Experience Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-purple-400 mb-8 flex items-center justify-center"
      >
        Experience 🚀
      </motion.h2>

      {/* Experience Card */}
      <motion.div
        className="bg-[#27274d] text-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto text-left border border-purple-400"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* ISRO Logo with Title */}
        <div className="flex items-center space-x-4">
          <img
            src="/icons/isro.jpg" // Manually added from public/assets
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
          <li>Developed interactive <strong>map visualizations</strong> using <strong>Leaflet.js</strong> for climate analysis.</li>
          <li>Integrated <strong>PostgreSQL & PostGIS</strong> to store and analyze geospatial data.</li>
          <li>Built <strong>full-stack web applications</strong> for visualizing climate trends.</li>
          <li>Conducted <strong>QGIS spatial analysis</strong> for climate data interpretation.</li>
          <li>Worked under the guidance of <strong>Mr. Sayed Shadab</strong>, Scientist SE-F, <strong>ECSA Department</strong>.</li>
        </ul>

        {/* Links Section */}
        <div className="mt-6">
          <p className="text-lg font-semibold text-white">Useful Links:</p>
          <div className="flex flex-wrap justify-start gap-4 mt-2">
            {/* NRSC Website */}
            <a
              href="https://www.nrsc.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-purple-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-900 transition"
            >
              🌍 NRSC ISRO Website
            </a>
            
            {/* NICeS Portal */}
            <a
              href="https://nices.nrsc.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-purple-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-900 transition"
            >
              📊 NICeS Portal
            </a>

            {/* Project Certification */}
            <a
              href="https://drive.google.com/file/d/1RdFCuHCxdJBVcf23CbZbTZqCklJUTsZ_/view"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-purple-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-900 transition"
            >
              🎓 Project Certification
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
