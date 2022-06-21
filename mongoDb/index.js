const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const express = require("express");

const app = express();
const database = "e-comm";
const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection("products");
  let response = await collection.find({}).toArray();
  console.log(response);
}

getData();


app.get('',(req,res) => {
    res.send(`<h1> This is Home Page</h1>`)
})

app.listen(8000);
