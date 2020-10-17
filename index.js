const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var app = express();
app.use(bodyParser.json());
app.use('/api', require('./routes/api'))

mongoose.connect('mongodb://instant:root123@ds151247.mlab.com:51247/instant_prayer_db');
mongoose.Promise = global.Promise;

app.listen(process.env.PORT || 3000, function(){
    console.log('listening to port 3000')
});