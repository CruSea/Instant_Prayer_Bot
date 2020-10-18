const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const geoSchema = new Schema({
    
})
const userSchema = new Schema({
    Chat_Id:{
        type: Number
    },
    first_name:{
        type: String,
        required: [true, 'First Name field is required']
    },
    last_name:{
        type: String,
        // required: [true, 'Last Name field is required']
    },
    user_name:{
        type: String
    },
    phone_number: {
        type: Number
        },
    coordinates: {
        type:{
                type: String,
                default: "Point"
            },
        
            longtiude:{
                type: Number
            },
            latitude:{
                type: Number
            }
    }

});

const User = mongoose.model('user', userSchema);
module.exports = User;