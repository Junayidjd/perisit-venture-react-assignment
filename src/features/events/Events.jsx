import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { Button, Chip } from '@mui/material';
import { motion, useMotionValue, useTransform } from 'framer-motion'; // Import Framer Motion

const Events = () => {
  const events = useSelector((state) => state.events.events);
  const [filter, setFilter] = useState("Today");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900"
    >
      {/* Navbar */}
      <Header />

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-24">
        <h1 className="text-3xl font-bold text-gray-200 mb-6">
          We Helped Communities Connect & Flourish
        </h1>

        {/* Filter Buttons */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex space-x-4 mb-6"
        >
          {["Today", "Tomorrow", "This Week", "Next Week", "This Month"].map(
            (period) => (
              <Button
                key={period}
                variant={filter === period ? "contained" : "outlined"}
                color="primary"
                onClick={() => setFilter(period)}
                className="rounded-full"
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {period}
              </Button>
            )
          )}
        </motion.div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <Card key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Card Component with Cursor Movement and Border Light Effect
const Card = ({ event, index }) => {
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
  };

  return (
    <motion.div
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
    >
      {/* Border Light Effect */}
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
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

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
          src={event.image} // Updated path
          alt={event.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <Chip
              label={event.category}
              color="primary"
              className="mb-2"
            />
            <Chip
              label={event.type}
              color={event.type === "Free" ? "success" : "warning"}
              className="bg-green-100 text-green-800"
            />
          </div>

          {/* Event Title */}
          <h2 className="text-xl font-bold text-gray-200 mb-2">
            {event.title}
          </h2>

          {/* Event Date and Time */}
          <p className="text-gray-400 mb-2">
            {event.date} | {event.time}
          </p>

          {/* Event Location */}
          <p className="text-gray-400 mb-4">
            Location: {event.location}
          </p>

          {/* View Details Button */}
          <Link
            to={`/event/${event.id}`}
            className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            View Details
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Events;