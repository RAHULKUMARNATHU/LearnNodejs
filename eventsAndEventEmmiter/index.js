const express = require("express");
const EventEmmiter = require("events");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("api called");
});

app.listen(port, (err) => {
    if(err){
        console.log(`Error While Conneeting Server to port ${port}`);
        return ;
    }
    console.log(`Happily :) Server Connected to PORT ${port}`)
});
