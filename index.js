const express     =   require('express');
const bodyParser  =   require('body-parser');
const mongoose    =   require('mongoose');
const routes      =   require('./routes/api')
const cors        =   require('cors')

var app = express();

mongoose.connect('mongodb://instant:root123@ds151247.mlab.com:51247/instant_prayer_db');

mongoose.connection.on('error', (err) => {
    console.log(err.message);
    process.exit(1);
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', routes);





app.listen(process.env.PORT || 3000, function(){
    console.log('listening to port 3000')
});