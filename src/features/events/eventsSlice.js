
import { createSlice } from '@reduxjs/toolkit';
import eidimage from '../../assets/event_1737999482266.webp';
import christmasimage from '../../assets/christmas.webp';

// localStorage se data fetch karo (agar available hai)
const loadEventsFromLocalStorage = () => {
  const savedEvents = localStorage.getItem('events');
  return savedEvents ? JSON.parse(savedEvents) : null;
};

const initialState = {
  events: loadEventsFromLocalStorage() || [
    {
      id: 1,
      title: "Christmas Charity Drive",
      date: "2025-03-15",
      time: "5:30 AM IST",
      category: "Donation",
      type: "Free",
      image: christmasimage,
      description:
        "Join us for the Christmas Charity Drive event to support underprivileged families.",
      location: "New York, USA",
    },
    {
      id: 2,
      title: "Eid-ul-Fitr",
      date: "2025-03-30",
      time: "5:30 AM IST",
      category: "Religious",
      type: "Free",
      image: eidimage,
      description:
        "Come celebrate Eid-ul-Fitr with the community in prayer and festive activities.",
      location: "Dubai, UAE",
    },
  ],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      const newEvent = {
        id: state.events.length + 1,
        ...action.payload,
      };
      state.events.push(newEvent);

      // Update localStorage with the new events array
      localStorage.setItem('events', JSON.stringify(state.events));
    },
  },
});

export const { addEvent } = eventsSlice.actions;
export default eventsSlice.reducer;