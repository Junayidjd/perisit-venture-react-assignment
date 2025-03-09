
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEvent } from '../features/events/eventsSlice';
import { TextField, Button } from '@mui/material';
import Header from '../components/Header'; // Import the Navbar
import { motion } from "framer-motion"; // Import Framer Motion

// Import shadcn Select components
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CreateEvent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    category: '',
    image: '',
    location: '',
    description: '', // Add description to the state
    file: null,
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [imagePreview, setImagePreview] = useState(null); // To show image preview

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first file
    if (file) {
      setNewEvent({ ...newEvent, file: file }); // Store the file in the state
      setImagePreview(URL.createObjectURL(file)); // Create a preview URL for the image
    }
  };

  const handleCategoryChange = (value) => {
    setNewEvent({ ...newEvent, category: value });
  };

  const handleSubmit = () => {
    if (
      !newEvent.title ||
      !newEvent.date ||
      !newEvent.category ||
      !newEvent.location ||
      !newEvent.description // Ensure description is also filled
    ) {
      setSuccessMessage('Please fill all required fields.');
      return;
    }

    // If a file is uploaded, we can handle it by uploading it to your server or storing locally
    // For simplicity, we will assume the image is just the file URL here
    const imageToUpload = newEvent.file ? imagePreview : newEvent.image; // Use the file URL if uploaded

    if (!imageToUpload && !newEvent.file) {
      setSuccessMessage('Please provide an image (either URL or file upload).');
      return;
    }

    // Prepare the final event object
    const eventData = {
      ...newEvent,
      image: imageToUpload, // Set the image to the file URL if uploaded
    };

    dispatch(addEvent(eventData)); // Dispatch the event to the Redux store
    setSuccessMessage('Your event has been successfully created!');
    setTimeout(() => {
      navigate('/events'); // Redirect after 2 seconds
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900"
    >
      {/* Navbar */}
      <Header />

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-24">
        <h1 className="text-3xl font-bold text-gray-200 mb-6">Create New Event</h1>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-gray-800 p-8 rounded-lg shadow-md"
        >
          {/* Event Title */}
          <TextField
            fullWidth
            label="Event Title"
            name="title"
            value={newEvent.title}
            onChange={handleInputChange}
            className="mb-6"
            required
            variant="outlined"
            InputLabelProps={{ style: { color: '#b3b3b3' } }}
            InputProps={{ style: { color: '#ffffff' } }}
          />
          
          {/* Event Date */}
          <TextField
            fullWidth
            type="date"
            label="Event Date"
            name="date"
            value={newEvent.date}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true, style: { color: '#b3b3b3' } }}
            className="mb-6"
            required
            variant="outlined"
            InputProps={{ style: { color: '#ffffff' } }}
          />
          
          {/* Event Category */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Category
            </label>
            <Select onValueChange={handleCategoryChange} value={newEvent.category}>
              <SelectTrigger className="w-full bg-gray-700 text-gray-200">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-gray-200">
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  <SelectItem value="Donation">Donation</SelectItem>
                  <SelectItem value="Religious">Religious</SelectItem>
                  <SelectItem value="Social">Social</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Event Location */}
          <TextField
            fullWidth
            label="Event Location"
            name="location"
            value={newEvent.location}
            onChange={handleInputChange}
            className="mb-6"
            required
            variant="outlined"
            InputLabelProps={{ style: { color: '#b3b3b3' } }}
            InputProps={{ style: { color: '#ffffff' } }}
          />

          {/* Event Description */}
          <TextField
            fullWidth
            label="Event Description"
            name="description"
            value={newEvent.description}
            onChange={handleInputChange}
            multiline
            rows={4}
            className="mb-6"
            required
            variant="outlined"
            InputLabelProps={{ style: { color: '#b3b3b3' } }}
            InputProps={{ style: { color: '#ffffff' } }}
          />
          
          {/* Image URL */}
          {!newEvent.file && (
            <TextField
              fullWidth
              label="Image URL"
              name="image"
              value={newEvent.image}
              onChange={handleInputChange}
              className="mb-6"
              required={!newEvent.file}
              variant="outlined"
              InputLabelProps={{ style: { color: '#b3b3b3' } }}
              InputProps={{ style: { color: '#ffffff' } }}
            />
          )}

          {/* Image Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
            />
            {imagePreview && (
              <div className="mt-4">
                <h3 className="text-gray-200 font-medium">Image Preview:</h3>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-32 h-32 object-cover mt-2 rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              className="w-1/2 bg-blue-600 hover:bg-blue-700"
            >
              Add Event
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate('/events')}
              className="w-1/2 text-gray-200 border-gray-200 hover:border-gray-400"
            >
              Back to Events
            </Button>
          </div>
          {successMessage && (
            <p className="mt-4 text-green-400">{successMessage}</p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CreateEvent;