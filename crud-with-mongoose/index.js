const mongoose = require("mongoose");

// connected to mongoDB
mongoose.connect("mongodb://localhost:27017/e-comm");

// creating Schema
const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});

// connecting model to nodejs by using created Schema
const saveInDB = async () => {
  const productModel = mongoose.model("products", productSchema); //connects collection to db
  let data = new productModel({
    name: "redmi note 10",
    brand: "redmi",
    price: 251,
    category: "mobile",
  });
  const result = await data.save();
  console.log(result);
};


saveInDB();

