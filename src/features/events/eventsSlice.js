import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [
    {
      id: 1,
      title: 'Christmas Charity Drive',
      date: '2025-03-15',
      time: '5:30 AM IST',
      category: 'Donation',
      type: 'Free',
      image: 'src/assets/christmas.webp', // Add the image URL here
      description: 'Join us for the Christmas Charity Drive event to support underprivileged families.',
    },
    {
      id: 2,
      title: 'Eid-ul-Fitr',
      date: '2025-03-30',
      time: '5:30 AM IST',
      category: 'Religious',
      type: 'Free',
      image: 'src/assets/event_1737999482266.webp', // Add the image URL here
      description: 'Come celebrate Eid-ul-Fitr with the community in prayer and festive activities.',
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
