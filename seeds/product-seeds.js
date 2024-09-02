const { Product } = require('../models'); // Import the Product model

// Array of product data to seed the database
const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1, // Category ID associated with the product
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    stock: 25,
    category_id: 5, // Category ID associated with the product
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    stock: 12,
    category_id: 4, // Category ID associated with the product
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    stock: 50,
    category_id: 3, // Category ID associated with the product
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    stock: 22,
    category_id: 2, // Category ID associated with the product
  },
];

// Function to bulk insert the product data into the database
const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts; // Export the seed function for use in the seeding script

