const seedCategories = require('./category-seeds'); // Import the category seeding function
const seedProducts = require('./product-seeds'); // Import the product seeding function
const seedTags = require('./tag-seeds'); // Import the tag seeding function
const seedProductTags = require('./product-tag-seeds'); // Import the product-tag seeding function

const sequelize = require('../config/connection'); // Import the Sequelize connection

// Function to seed all data sequentially
const seedAll = async () => {
  await sequelize.sync({ force: true }); // Sync the database and drop/recreate all tables
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategories(); // Seed categories
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts(); // Seed products
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags(); // Seed tags
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags(); // Seed product tags
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0); // Exit the process after seeding is complete
};

seedAll(); // Execute the seeding process

