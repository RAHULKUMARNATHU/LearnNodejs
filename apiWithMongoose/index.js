const express = require("express");
require("./config");
const Product = require("./product");

const app = express();

//parse data || MiddleWare converts data into object form
app.use(express.json());

app.post("/create", async (req, res) => {

    let data = Product(req.body)
    const result = await data.save();
  res.send(result);
});


app.listen(5000);
