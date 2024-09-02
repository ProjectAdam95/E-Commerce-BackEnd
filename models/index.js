const Product = require('./Product'); // Import the Product model
const Category = require('./Category'); // Import the Category model
const Tag = require('./Tag'); // Import the Tag model
const ProductTag = require('./ProductTag'); // Import the ProductTag join table model

// Associations
Product.belongsTo(Category, { foreignKey: 'category_id' }); // Each Product belongs to one Category
Category.hasMany(Product, { foreignKey: 'category_id', onDelete: 'CASCADE' }); // Each Category can have many Products; cascade delete
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: 'product_id' }); // Many-to-many relationship between Products and Tags
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tag_id' }); // Many-to-many relationship between Tags and Products

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
}; // Export the models and their associations

