const express = require("express");
const cors = require("cors");
const Product = require("../Modules/Products");
const shopProdcuts = express.Router();
shopProdcuts.use(cors());

const { log } = console;
const PAGINATESKIP = "?skip=:num";

shopProdcuts.get(`/${PAGINATESKIP}`, (req, res) => {
  const { num } = req.params;
  console.log(num);
  Product.findAll({ limit: 2, offset: num })
    .then((product) => {
      res.status(200).send(product);
    })
    .catch((err) => console.log(err));
});

// Sorting Route
shopProdcuts.get(`/sortBy/:param`, (req, res) => {
  const { param } = req.params;
  log(param);
  Product.sequelize
    .query(`SELECT * FROM products ORDER BY products.${param}`)
    .then((products) => res.status(200).send(products[0]))
    .catch((err) => res.status(400).send({ error: err }));
});

shopProdcuts.get("/filterByCategory/:param", (req, res) => {
  const { param } = req.params;
  log(param);
  Product.sequelize
    .query(`SELECT * FROM products WHERE category = '${param}'`)
    .then((products) => res.status(200).send(products[0]))
    .catch((err) => res.status(400).send({ error: err }));
});

shopProdcuts.post("/", (req, res) => {});
shopProdcuts.put("/:id", (req, res) => {});
shopProdcuts.delete("/", (req, res) => {});

module.exports = shopProdcuts;
