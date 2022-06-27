// required library
const express = require("express");
const multer = require("multer");

const app = express();

// set view engine:-like here :- ejs
app.set("view engine", "ejs");
app.set("views", "./views");

// setting up static file
app.use(express.static("./assets"));

//------BodyParser--------//
app.use(express.urlencoded({ extended: false }));

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads"); //file destination i.e uploads folder
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("image");

app.post("/uploadfile", upload, (req, res) => {
  res.render("home");
});

app.get("/", (req, res) => {
  res.render("home");
});

// listening app at port 5000
app.listen(5000);
