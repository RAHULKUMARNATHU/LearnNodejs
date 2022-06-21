// const express = require("express");

// const app = express();

// // Creating MiddleWare Here

// const reqFilter = (req, res, next) => {
//   if (!req.query.age) {
//     res.send("Plz Provide age");
//   }else if(req.query.age<18){
//     res.send("U can't Access this Page");
//    }
  
//   else {
//     next();
//   }
// };

// app.use(reqFilter);

// app.get("/", (req, res) => {
//   res.send(`<h1> Welcome to Home Page </h1>`);
// });

// app.get("/users", (req, res) => {
//   res.send(`<h1> Welcome to Users Page</h1>`);
// });


// app.listen(5000);




// Creating Router-level-middleware 


const express = require('express');
const reqFilter = require('./middleware');

const route = express.Router(); 
const app = express();

route.use(reqFilter)

app.get('' , (req , res) => {
  res.send(`<h1>Welcome to Home Page</h1>`)
})

route.get('/users' , (req , res) => {

    res.send(`<h1>Hiii User :)</h1>`);
  
})

app.get('/contact' , (req , res) => {
  res.send(`<h3> Developer : shivansh@shiva.com</h3>`)
})

app.get('/about' , (req , res) => {
  res.send(`<h1>This site is underprocess .U can help to emprove this site (:</h1>`)
})

app.use('/', route);

app.listen(8000);