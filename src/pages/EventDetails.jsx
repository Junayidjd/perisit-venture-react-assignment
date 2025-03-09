
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Header';

const EventDetails = () => {
  const { id } = useParams();
  const event = useSelector((state) =>
    state.events.events.find((event) => event.id === parseInt(id))
  );

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Header />
        <div className="container mx-auto px-6 pt-24">
          <p className="text-gray-200">Event not found!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navbar */}
      <Header />

      {/* Event Details */}
      <div className="container mx-auto px-6 pt-24">
        {/* Event Image */}
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />

        {/* Event Title */}
        <h1 className="text-4xl font-bold text-gray-200 mb-4">{event.title}</h1>

        {/* Event Category and Date */}
        <div className="flex justify-between mb-4">
          <span className="text-lg font-medium text-blue-400">{event.category}</span>
          <span className="text-lg font-medium text-gray-400">
            {event.date} | {event.time}
          </span>
        </div>

        {/* Event Location */}
        <p className="text-gray-400 mb-4">
          Location: {event.location}
        </p>

        {/* Event Description */}
        <p className="text-gray-300 text-lg mb-6">{event.description}</p>
      </div>
    </div>
  );
};

export default EventDetails;