// required library
const express = require("express");
const multer = require("multer");

// makes executable
const app = express();

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads"); //file destination i.e uploads folder
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname+"-"+Date.now()+".jpg");
    },
  }),
}).single("user_file");

// route to post
app.post("/upload" , upload, (req, res) => {
  res.send(" uploaded");
});

// listening app at port 5000
app.listen(5000);
