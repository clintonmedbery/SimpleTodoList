const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var app = express();

var router = require('./services/router');

//Use ENV Variables
console.log("Connecting to Mongo");
mongoose.connect('mongodb://root:tWwp3Fm4hZUsaLw4@mongo:27017');
//Local Mongo connection. Need to put these into ENV
// mongoose.connect('mongodb://localhost:todoList/todoList');

console.log("Connected to Mongo");


app.use(morgan('combined'));
app.use(bodyParser.json());
app.use('/v1', router);

var PORT = process.env.PORT || 3000;
var HOST = process.env.HOST || '0.0.0.0';

//Just a test to make sure shit works
app.get('/hello', function (req, res) {
    console.log("Hello World");
    res.send({hello:'Hello World!'});
});

console.log('Listening on port ', HOST, PORT);
app.listen(PORT, HOST);