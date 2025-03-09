import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEvent } from '../features/events/eventsSlice';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Header from '../components/Header'; // Import the Navbar

const CreateEvent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newEvent, setNewEvent] = useState({ title: '', date: '', category: '', image: '', file: null });
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

  const handleSubmit = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.category) {
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
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Header />

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-24">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Create New Event</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Event Title */}
          <TextField
            fullWidth
            label="Event Title"
            name="title"
            value={newEvent.title}
            onChange={handleInputChange}
            className="mb-6"  // Increased margin bottom for spacing
            required
          />
          
          {/* Event Date */}
          <TextField
            fullWidth
            type="date"
            label="Event Date"
            name="date"
            value={newEvent.date}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
            className="mb-6"  // Increased margin bottom for spacing
            required
          />
          
          {/* Event Category */}
          <FormControl fullWidth className="mb-6">  {/* Increased margin bottom */}
            <InputLabel>Category</InputLabel>
            <Select
              name="category"
              value={newEvent.category}
              onChange={handleInputChange}
              label="Category"
              required
            >
              <MenuItem value="Donation">Donation</MenuItem>
              <MenuItem value="Religious">Religious</MenuItem>
              <MenuItem value="Social">Social</MenuItem>
            </Select>
          </FormControl>

          {/* Image URL */}
          {!newEvent.file && ( // Only show Image URL input if no file is uploaded
            <TextField
              fullWidth
              label="Image URL"
              name="image"
              value={newEvent.image}
              onChange={handleInputChange}
              className="mb-6"  // Increased margin bottom for spacing
              required={!newEvent.file} // Make it required only when no file is uploaded
            />
          )}

          {/* Image Upload */}
          <div className="mb-6">  {/* Increased margin bottom */}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border p-2 mb-4"  // Added padding and margin bottom for file input
            />
            {imagePreview && (
              <div className="mt-4">
                <h3 className="text-gray-800 font-medium">Image Preview:</h3>
                <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover mt-2" />
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Add Event
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate('/events')}
            >
              Back to Events
            </Button>
          </div>
          {successMessage && (
            <p className="mt-4 text-green-600">{successMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
