const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // id column (optional but recommended for primary key)
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // product_id column
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product', // references the Product model
        key: 'id',
      },
    },
    // tag_id column
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag', // references the Tag model
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;

