const User = require("../services/user.js");

exports.getUser = async function(req, res, next) {

    let user = await User.getCollection({});

    res.json(user);

};


exports.createUser = async function(req, res, next) {

    let user = await User.create(req.body)
    
    res.json(user);

};
