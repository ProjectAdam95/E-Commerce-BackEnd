const router = require('express').Router();
const apiRoutes = require('./api'); // Import the API routes

// Use API routes
router.use('/api', apiRoutes);

// Fallback route for handling requests to undefined routes
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>"); // Send a simple message for invalid routes
});

module.exports = router; // Export the router to be used in the main server file
