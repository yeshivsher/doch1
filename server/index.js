const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/doch1', {useNewUrlParser: true});
mongoose.Promise = global.Promise;

//set up static files
app.use(express.static('../client/public'));

// use body-parser middleware
app.use(bodyParser.json());

// to allow client access from different port.
app.use(cors());

// initialize routes
app.use('/api', require('./routes/soldiersListApi'));

// error handling middleware
app.use(function(err, req, res, next){
    console.log(err);
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(5000, function(){
    console.log('now listening for requests');
});