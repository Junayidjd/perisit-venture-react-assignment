import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate import karein
import Header from '../components/Header'; // Import the Navbar

const About = () => {
  const navigate = useNavigate(); // useNavigate hook initialize karein

  // Function to handle button click
  const handleViewServices = () => {
    navigate('/'); // Home page par redirect karein
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="hero text-center py-32 bg-gray-800 text-white">
        <h1 className="text-4xl font-bold mb-4">Communion</h1>
        <p className="text-lg mb-8">
          Unlimited Advantages | Home | Communities | Events | Leaders | Support
        </p>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Mission Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">
            Unite, Innovate, Connect, Inspire Together
          </h2>
          <p className="text-gray-400">
            Join us to be part of a community where spirituality meets innovation. Together, we’ll build
            a world that’s more inclusive, engaging, and connected than ever before!
          </p>
        </div>

        {/* Services Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">Our Services</h2>
          <p className="text-gray-400 mb-6">
            Explore the wide range of services we offer to help you connect, grow, and thrive in your
            spiritual journey.
          </p>
          <button
            onClick={handleViewServices} // Button click handler
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            View Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;