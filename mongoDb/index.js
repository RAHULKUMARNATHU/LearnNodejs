const express = require("express");
// importing connected db 
const dbConnect = require('./mongodb')
// making executable to express
const app = express();

// console.warn(dbConnect());

// using connected db to find data
// dbConnect().then((res) => {
//   res
//     .find({})
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });


// using connected db to find data
const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);

  // console.log("main called")
};

main();


app.get("", (req, res) => {
  res.send(`<h1> This is Home Page</h1>`);
});

app.listen(8000);
