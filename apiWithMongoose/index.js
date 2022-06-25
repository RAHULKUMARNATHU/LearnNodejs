const express = require("express");
require("./config");
const Product = require("./product");

const app = express();

//parse data || MiddleWare converts data into object form
app.use(express.json());

// post data in database
app.post("/create", async (req, res) => {
  // here Product is model with Schemas
  let data = Product(req.body);
  const result = await data.save();
  res.send(result);
});

// get data from database

app.get("/list", async (req, res) => {
  let data = await Product.find();
  res.send(data);
});

// delete data from database
app.delete("/delete/:_id", async (req, res) => {
  const data = await Product.deleteOne(req.params);
  res.send(data);
});

// update data to database
app.put("/update/:_id", async (req, res) => {
  let data = await Product.updateOne(req.params, { $set: req.body });

  res.send(data);
});

app.listen(5000);
