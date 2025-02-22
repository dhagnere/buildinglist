const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');

//mongoose connect
mongoose.connect('mongodb://localhost/buildingsDB');
const db = mongoose.connection;


// Port
const port = 3000;
// init app
const app = express();

const index = require('./routes/index');
const buildings = require('./routes/buildings');
const categories = require('./routes/categories');
const manage = require('./routes/manage');

// View Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//moement
app.locals.moment = require('moment');


// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Express messages
app.use(require('connect-flash')());
app.use((req, res, next) => {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

// Express validator


app.use('/', index);
app.use('/categories', categories);
app.use('/manage', manage);
app.use('/buildings', buildings);

app.listen(port, () => {
  console.log('Server started on port ' + port);
});