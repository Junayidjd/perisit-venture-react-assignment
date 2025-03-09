
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <img
            src="src\assets\Logocommunion.0485ada0760e4748313f.png" // Updated path
            alt="Communion App Logo"
            className="h-10"
          />
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-300 hover:text-blue-400 font-medium">
              Home
            </Link>
            <Link to="/events" className="text-gray-300 hover:text-blue-400 font-medium">
              Events
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-blue-400 font-medium">
              About
            </Link>
          </div>
        </div>
        <Link
          to="/create-event"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Create Event
        </Link>
      </nav>
    </header>
  );
};

export default Header;


