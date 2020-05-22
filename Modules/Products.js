const { Sequelize } = require("sequelize");
const db = require("../database/db");

module.exports = db.define(
  "product",
  {
    barcode: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    department: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    brand: {
      type: Sequelize.STRING,
    },
    tag: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);
