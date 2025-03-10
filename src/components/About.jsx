import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate import karein
import Header from '../components/Header'; // Import the Navbar
import { motion } from 'framer-motion'; // Import Framer Motion

const About = () => {
  const navigate = useNavigate(); // useNavigate hook initialize karein

  // Function to handle button click
  const handleViewServices = () => {
    navigate('/'); // Home page par redirect karein
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900"
    >
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <motion.section
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="hero text-center py-32 bg-gray-800 text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Communion
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-lg mb-8"
        >
          Unlimited Advantages | Home | Communities | Events | Leaders | Support
        </motion.p>
      </motion.section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="bg-gray-800 p-8 rounded-lg shadow-md mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-200 mb-4">
            Unite, Innovate, Connect, Inspire Together
          </h2>
          <p className="text-gray-400">
            Join us to be part of a community where spirituality meets innovation. Together, we’ll build
            a world that’s more inclusive, engaging, and connected than ever before!
          </p>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="bg-gray-800 p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-gray-200 mb-4">Our Services</h2>
          <p className="text-gray-400 mb-6">
            Explore the wide range of services we offer to help you connect, grow, and thrive in your
            spiritual journey.
          </p>
          <motion.button
            onClick={handleViewServices} // Button click handler
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            View Our Services
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;