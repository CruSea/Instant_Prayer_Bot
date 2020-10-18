const User = require("../services/user.js");

exports.getUser = async function(req, res, next) {

    let user = await User.getCollection({});

    res.json(user);

};


exports.isRegistered = async function(req, res, next) {

    console.log(`get data by ${req.params.phone}`);

    let user = await User.getOne({phone_number : req.params.phone});
    res.send(!!user);

};


exports.createUser = async function(req, res, next) {

    let user = await User.create(req.body)
    
    res.json(user);

};

exports.updateUser = async function(req, res, next){
    let user = await User.update(req.body._id)
}

exports.removeUser = async function(req, res, next){
    let user = await User.delete(req.body._id)
    res.send('successfully deleted')
}
