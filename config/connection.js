require('dotenv').config(); // Load environment variables from .env file

const Sequelize = require('sequelize');

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL) // Use the DB_URL if available (e.g., for production)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { // Otherwise, use individual environment variables
      host: 'localhost', // Database server location
      dialect: 'postgres', // Specify PostgreSQL as the database dialect
      dialectOptions: {
        decimalNumbers: true, // Enable support for decimal numbers in the database
      },
    });

module.exports = sequelize; // Export the configured Sequelize instance
