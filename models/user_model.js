const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const geoSchema = new Schema({
    type:{
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
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
    location:geoSchema

});

const User = mongoose.model('user', userSchema);
module.exports = User;