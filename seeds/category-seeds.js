const { Category } = require('../models'); // Import the Category model

// Array of category data to seed the database
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

// Function to bulk insert the category data into the database
const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories; // Export the seed function for use in the seeding script

