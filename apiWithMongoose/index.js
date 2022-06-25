const express = require("express");
require("./config");
const Product = require("./product");

const app = express();

//parse data || MiddleWare converts data into object form
app.use(express.json());

// post data in database
app.post("/create", async (req, res) => {

    let data = Product(req.body)
    const result = await data.save();
  res.send(result);
});

// get data from database

app.get('/list' , async(req,res)=>{
    let data = await Product.find();
    res.send(data)
})
app.listen(5000);
