const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  // creates schema
  const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String,
  });

  const productModel = mongoose.model("products", productSchema);
  let data = new productModel({
    name: "mi 11",
    price: 255,
    brand: "mi",
    category : "Mobile" 
  });
  let result = await data.save();
  console.log(result);
};

main();
