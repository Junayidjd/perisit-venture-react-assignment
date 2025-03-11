// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/Logocommunion.0485ada0760e4748313f.png';


// const Header = () => {
//   return (
//     <header className="bg-gray-900 shadow-sm fixed w-full top-0 z-50">
//       <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" aria-label="Home">
//         <img
//             src={logo}
//             alt="Communion App Logo"
//             className="h-10"
//         />
//         </Link>

//         {/* Navigation Links */}
//         <div className="flex items-center space-x-8">
//           <div className="hidden md:flex space-x-6">
//             <Link
//               to="/"
//               className="text-gray-300 hover:text-blue-400 font-medium"
//             >
//               Home
//             </Link>
//             <Link
//               to="/events"
//               className="text-gray-300 hover:text-blue-400 font-medium"
//             >
//               Events
//             </Link>
//             <Link
//               to="/about"
//               className="text-gray-300 hover:text-blue-400 font-medium"
//             >
//               About
//             </Link>
//           </div>

//           {/* Create Event Button */}
//           <Link
//             to="/create-event"
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
//           >
//             Create Event
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


































import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logocommunion.0485ada0760e4748313f.png';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" aria-label="Home">
          <img src={logo} alt="Communion App Logo" className="h-10" />
        </Link>

        {/* Hamburger Menu Icon (Mobile Only) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
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

          {/* Create Event Button */}
          <Link
            to="/create-event"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Create Event
          </Link>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 right-0 w-full bg-gray-800 shadow-lg"
          >
            <div className="flex flex-col space-y-4 p-4">
              <Link to="/" className="text-gray-300 hover:text-blue-400">
                Home
              </Link>
              <Link to="/events" className="text-gray-300 hover:text-blue-400">
                Events
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-blue-400">
                About
              </Link>
              <Link
                to="/create-event"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-center"
              >
                Create Event
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;