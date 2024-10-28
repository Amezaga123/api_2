// models/productModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER, // Pode ser INTEGER se você estiver armazenando IDs de usuários
        allowNull: false
    }
});

module.exports = Product;
