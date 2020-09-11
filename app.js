const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-sessions");
const expressValidator = require("express-validator");


//port
const port = 5000;

//init app
const app = express();

//View setup
app.set('views', path.join(__dirname, 'views'));
app.set('view-engine', 'pug');

//Body-parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Public static folder
app.use(express.static(path.join(__dirname, 'public')));

//express messages middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});


app.listen(port , (req, res, next) => {
  console.log("server running on port " +port)
});
