const dbConnect = require('./mongodb');

// update collection using updateOne
const updateData = async() =>{
let db = await dbConnect();
// update only 1st occurance
let result = await db.updateOne(
    {name : ' nord 10'},{ $set :{name : "realme 8" , brand:"Realme"}}
);
console.warn(result)
}

updateData();