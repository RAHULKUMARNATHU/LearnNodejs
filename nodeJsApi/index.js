const express = require('express')
const dbConnect = require('./mongodb');

const app = express();
// Api for get Data
app.get('/', async (req , res)=>{
    let data = await dbConnect();
    data =  await data.find({}).toArray();
    res.send(data)
})

app.listen(8000);
