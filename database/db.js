require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_HOST, DB_USER, DB_PASS, DB_PORT } = process.env;

const sequelize = new Sequelize("online-shop(Commerce-E)", DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "postgres",
});

module.exports = sequelize;
