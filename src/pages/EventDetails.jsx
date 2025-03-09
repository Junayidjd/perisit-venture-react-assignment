import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../../src/components/Header'; // Import the Navbar

const EventDetails = () => {
  // Use the useParams hook to get the event id from the URL
  const { id } = useParams();
  
  // Get the event details from the Redux store
  const event = useSelector((state) =>
    state.events.events.find((event) => event.id === parseInt(id))
  );

  // If no event is found, show a loading or not found message
  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-6 pt-24">
          <p>Event not found!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{event.title}</h1>

        {/* Event Category and Date */}
        <div className="flex justify-between mb-4">
          <span className="text-lg font-medium text-blue-600">{event.category}</span>
          <span className="text-lg font-medium text-gray-600">{event.date} | {event.time}</span>
        </div>

        {/* Event Description */}
        <p className="text-gray-700 text-lg mb-6">{event.description}</p>

        {/* Additional event details if required */}
        {/* You can add more event details here if needed */}
      </div>
    </div>
  );
};

export default EventDetails;
