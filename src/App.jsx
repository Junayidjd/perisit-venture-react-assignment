import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Events from './features/events/Events';
import CreateEvent from './components/CreateEvent';
import EventDetails from './pages/EventDetails'; // Correct import

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/event/:id" element={<EventDetails />} /> {/* Updated to use EventDetails */}
      </Routes>
    </Router>
  );
};

export default App;
