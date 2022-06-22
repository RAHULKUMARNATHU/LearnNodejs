const {MongoClient } = require("mongodb") ; 
const url = "mongodb://localhost:27017";

const database = 'e-comm';
const client = new MongoClient(url);

async function dbConnect (){
    let result = await client.connect();
    db = result.db(database);  //seting connection to known database and stores in db .
    return db.collection('products'); //seting up collection as products 

}

module.exports = dbConnect