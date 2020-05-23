require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DATABASE, DB_HOST, DB_USER, DB_PASS, DB_PORT } = process.env;

const sequelize = new Sequelize(DATABASE, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "postgres",
});

module.exports = sequelize;
