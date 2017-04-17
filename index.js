const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var app = express();

var router = require('./services/router');

//Use ENV Variables
mongoose.connect('mongo://mongo:27017');

// mongoose.connect('mongodb://localhost:todoList/todoList');

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use('/v1', router);

var PORT = process.env.PORT || 3000;
var HOST = process.env.HOST || '127.0.0.1';

console.log('Listening on ', HOST, PORT);
app.listen(PORT, HOST);