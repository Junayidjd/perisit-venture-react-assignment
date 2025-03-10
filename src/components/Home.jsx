import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { motion, useMotionValue, useTransform } from 'framer-motion'; // Import Framer Motion

// Importing images
import christmasImage from '../assets/christmas.webp';
import eventImage from '../assets/event_1737999482266.webp';

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

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
          Connecting People Across Faiths & Interests
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-8"
        >
          Connecting people of all faiths through events and community support.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link to="/events">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Explore Events
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Featured Events Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="container mx-auto px-6 py-12"
      >
        <h2 className="text-3xl font-bold text-gray-200 mb-6">Featured Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Example Event Cards */}
          {[1, 2, 3, 4].map((event) => (
            <Card key={event} event={event} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Card Component with Cursor Movement and Border Light Effect
const Card = ({ event, hoveredCard, setHoveredCard }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHoveredCard(null);
  };

  const handleMouseEnter = () => {
    setHoveredCard(event);
  };

  return (
    <motion.div
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
    >
      {/* Border Light Effect */}
      {hoveredCard === event && (
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: '0.5rem',
            border: '2px solid transparent',
            background: `linear-gradient(45deg, rgba(59, 130, 246, 0.8), rgba(168, 85, 247, 0.8)) border-box`,
            mask: `linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)`,
            WebkitMask: `linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)`,
            WebkitMaskComposite: 'destination-out',
            maskComposite: 'exclude',
            pointerEvents: 'none',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      {/* Card Content */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative z-10"
      >
        <motion.img
          src={event === 1 ? christmasImage : eventImage}  // Use imported images
          alt="Event"
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-200 mb-2">Event Title</h2>
          <p className="text-gray-400 mb-4">2025-03-15 | 5:30 AM IST</p>
          <Link
            to={`/event/${event}`}
            className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            View Details
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;