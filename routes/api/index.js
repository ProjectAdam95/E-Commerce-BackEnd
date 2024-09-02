const router = require('express').Router();
const categoryRoutes = require('./category-routes'); // Import category-related routes
const productRoutes = require('./product-routes'); // Import product-related routes
const tagRoutes = require('./tag-routes'); // Import tag-related routes

// Define route paths for different entities
router.use('/categories', categoryRoutes); // Routes for handling category-related requests
router.use('/products', productRoutes); // Routes for handling product-related requests
router.use('/tags', tagRoutes); // Routes for handling tag-related requests

module.exports = router; // Export the router to be used in the main API router

