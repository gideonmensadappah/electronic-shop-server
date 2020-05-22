require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const shop = require("./Routes/products");
const app = express();
const PORT = process.env.SERVER_PORT || 8181;

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("WELCOME TO THE SERVER...");
});

app.use("/shop/", shop);

app.listen(PORT, () => console.log(`app on port ${PORT}...`));
