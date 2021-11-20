// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isDecimal: true //PLEASE CHECK AND CORRECT ME
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue = 10,
      validates: {
        int = true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

// module.exports = Product;
