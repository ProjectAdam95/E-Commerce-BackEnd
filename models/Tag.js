const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js'); // Import Sequelize connection instance

class Tag extends Model {} // Define Tag model by extending Sequelize's Model class

Tag.init(
  {
    // id column
    id: {
      type: DataTypes.INTEGER, // Define column as an integer
      allowNull: false, // Disallow NULL values
      primaryKey: true, // Set as primary key
      autoIncrement: true, // Automatically increment value for each new record
    },
    // tag_name column
    tag_name: {
      type: DataTypes.STRING, // Define column as a string
    },
  },
  {
    sequelize, // Pass in the Sequelize connection instance
    timestamps: false, // Disable automatic timestamp columns (createdAt, updatedAt)
    freezeTableName: true, // Prevent Sequelize from pluralizing the table name
    underscored: true, // Use snake_case for automatically added attributes (e.g., foreign keys)
    modelName: 'tag', // Set the model name (used by Sequelize internally)
  }
);

module.exports = Tag; // Export the Tag model for use in other files


