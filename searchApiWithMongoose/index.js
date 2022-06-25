const mongoose = require("mongoose");
const express = require("express");
require("./config");
const Product = require("./product");

// makes executable to express
const app = express();

app.get("/search/:key", async (req, res) => {
  let data = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });
  res.send(data);
});
// listen at port 5000
app.listen(5000);
