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

// create data in database
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

// saveInDB();

// Update data in database
const updateInDB = async () => {
  const productModel = mongoose.model("products", productSchema);
  let data = await productModel.updateOne(
    {
      name: "redmi note 10",
    },
    {
      $set: { price: 750, name: " redmi note 10 pro" },
    }
  );
  console.log(data);
};

// updateInDB();

// delete data from database

const deleteInDB = async () => {
  const productModel = await mongoose.model("products", productSchema);
  const data = await productModel.deleteOne({ name: " redmi note 10 pro" });
  console.log(data);
};

// deleteInDB();

// find data from database

const findInDB = async () => {
  const productModel = mongoose.model("products", productSchema);
  const data = await productModel.find();

  console.log(data);

};

findInDB();
