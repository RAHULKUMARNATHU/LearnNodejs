const mongoose = require('mongoose');
const express = require('express');
require('./config')
const Product = require('./product');


// makes executable to express
const app = express();


// listen at port 5000
app.listen(5000)
