
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { Button, Chip } from '@mui/material';

const Events = () => {
  const events = useSelector((state) => state.events.events);
  const [filter, setFilter] = useState("Today");

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navbar */}
      <Header />

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-24">
        <h1 className="text-3xl font-bold text-gray-200 mb-6">
          We Helped Communities Connect & Flourish
        </h1>

        {/* Filter Buttons */}
        <div className="flex space-x-4 mb-6">
          {["Today", "Tomorrow", "This Week", "Next Week", "This Month"].map(
            (period) => (
              <Button
                key={period}
                variant={filter === period ? "contained" : "outlined"}
                color="primary"
                onClick={() => setFilter(period)}
                className="rounded-full"
              >
                {period}
              </Button>
            )
          )}
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Event Image */}
              <img
                src={event.image} // Updated path
                alt={event.title}
                className="w-full h-48 object-cover"
              />

              {/* Event Details */}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;