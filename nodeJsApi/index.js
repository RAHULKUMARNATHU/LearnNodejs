const express = require('express')
const dbConnect = require('./mongodb');

const app = express();


// middleware for Post method data i.e getdata from request or postman


app.use(express.json());
// Api for get Method Data
app.get('/', async (req , res)=>{
    let data = await dbConnect();
    data =  await data.find({}).toArray();
    res.send(data)
})


// Api for Post Method Data
app.post('/' , async (req,res) => {
    console.log(req.body)
    let data = await dbConnect();
    let result  = await data.insertMany(req.body)
    res.send(req.body)

})


// API for Update()


app.put('/:name', async(req,res) => {
    let data = await dbConnect();
    let result = data.update(
        {name : req.params.name} , //match data from params
        { $set : req.body } //update data after getting from body
      
    )
    
    res.send({result :"updated"})
})


app.listen(8000);
