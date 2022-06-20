const express = require("express");

const app = express();

// Creating MiddleWare Here

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Plz Provide age");
  }else if(req.query.age<18){
    res.send("U can't Access this Page");
  }
  
  else {
    next();
  }
};

app.use(reqFilter);

app.get("/", (req, res) => {
  res.send(`<h1> Welcome to Home Page </h1>`);
});

app.get("/users", (req, res) => {
  res.send(`<h1> Welcome to Users Page</h1>`);
});


app.listen(5000);
