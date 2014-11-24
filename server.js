/**
 * Created by kmurugesan on 11/24/2014.
 */
var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

var port=3000;
app.set(process.env.PORT,port);
app.use(cors());
app.use(bodyParser());

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/sportsstore');

var Product = mongoose.model('Product', {name: 'string',description: 'string',category:'string',price: 'number'});