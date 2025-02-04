"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_3hbmt5e",
        "template_t8kasyc",
        templateParams,
        "zWcpYVecYCDme0nDi"
      )
      .then(
        (result) => {
          alert("Message sent successfully! 🚀");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message 😞. Try again later.");
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="relative flex flex-col items-center justify-center min-h-screen px-10 bg-[#2d2347] text-white overflow-hidden">
      
      {/* Contact Heading on the Left */}
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold text-purple-300 text-left w-full max-w-4xl"
      >
        CONTACT
      </motion.h2>

      {/* Contact Form Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 max-w-6xl w-full">
        
        {/* Contact Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-300 md:w-1/2"
        >
          <h3 className="text-3xl text-purple-400 font-bold mb-4">Let's Get In Touch 🚀</h3>
          <p>
            Feel free to reach out for any collaborations, job opportunities, or just to say hello! 
            I'm always excited to discuss new ideas and work on interesting projects.
          </p>
          <p className="mt-4">
            Drop your message below, and I'll get back to you as soon as possible!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form 
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-lg mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md h-32 focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 rounded-md transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
