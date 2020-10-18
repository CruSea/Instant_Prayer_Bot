const User = require("../models/user_model");

/**
 * Fetch users
 */
exports.getCollection = async function(query) {
    let user = await User.find(query);

    return user;
};


/**
 * Create an user
 */
exports.create = async function(data) {
    console.log("creating data with this payload", data);
    let user = await User.create(data);

    // user = await exports.getOne({ _id: user._id });
    return user;
};

/**
 * Fetch an user
 * GET /users/:id
 */
exports.getOne = async function(query) {
    let user = await User.findOne(query);
    return user;
};

// exports.delete = async function(data){
    let user = await User.delete(data)
    return user;
// }
// router.delete('/ninjas/:id', function(req, res, next){
//     Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
//         res.send(ninja);
//     });