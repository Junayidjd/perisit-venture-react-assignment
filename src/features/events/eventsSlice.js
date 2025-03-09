import { createSlice } from '@reduxjs/toolkit';
import eidimage from '../../assets/event_1737999482266.webp';
import christmasimage from '../../assets/christmas.webp';

const initialState = {
  events: [
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
      location: "New York, USA", // Add location here
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
      location: "Dubai, UAE", // Add location here
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
    },
  },
});

export const { addEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
