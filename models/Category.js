const { Model, DataTypes } = require('sequelize'); // Import Sequelize base classes
const sequelize = require('../config/connection'); // Import Sequelize connection instance

class Category extends Model {} // Define Category model by extending Sequelize's Model class

Category.init(
  {
    id: {
      type: DataTypes.INTEGER, // Define column as an integer
      allowNull: false, // Disallow NULL values
      primaryKey: true, // Set as primary key
      autoIncrement: true, // Automatically increment value (for IDs)
    },
    category_name: {
      type: DataTypes.STRING, // Define column as a string
      allowNull: false, // Disallow NULL values
    },
  },
  {
    sequelize, // Pass in the Sequelize connection instance
    timestamps: false, // Disable automatic timestamp columns (createdAt, updatedAt)
    freezeTableName: true, // Prevent Sequelize from pluralizing the table name
    underscored: true, // Use snake_case for automatically added attributes (e.g., foreign keys)
    modelName: 'category', // Set the model name (used by Sequelize internally)
  }
);

module.exports = Category; // Export the Category model for use in other files


