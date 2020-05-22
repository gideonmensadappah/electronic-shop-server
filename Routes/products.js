const express = require("express");
const cors = require("cors");
const Product = require("../Modules/Products");
const shopProdcuts = express.Router();
shopProdcuts.use(cors());

shopProdcuts.get("/", (req, res) => {
  Product.findAll()
    .then((product) => {
      res.send(product);
    })
    .catch((err) => console.log(err));
});

shopProdcuts.get("/:id", (req, res) => {
  res.send("products...");
});
shopProdcuts.post("/", (req, res) => {});
shopProdcuts.put("/:id", (req, res) => {});
shopProdcuts.delete("/", (req, res) => {});

module.exports = shopProdcuts;
