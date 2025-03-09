import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="hero text-center py-32 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold mb-4">Connecting People Across Faiths & Interests</h1>
        <p className="mb-8">Connecting people of all faiths through events and community support.</p>
        <Link to="/events">
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100">
            Explore Events
          </button>
        </Link>
      </section>

      {/* Featured Events Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Example Event Cards */}
          {[1, 2, 3, 4].map((event) => (
            <div
              key={event}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <img
                src={event === 1 ? "src/assets/christmas.webp" : "src/assets/event_1737999482266.webp"}
                alt="Event"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Event Title</h2>
                <p className="text-gray-600 mb-4">2025-03-15 | 5:30 AM IST</p>
                <Link
                  to={`/event/${event}`}
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

export default Home;
