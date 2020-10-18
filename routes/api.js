const express = require('express');
const router = express.Router();
const User = require('../models/user_model');

const UserCtrl = require('../controllers/user');

router.get('/users', UserCtrl.getUser);


router.post("/users", UserCtrl.createUser);


// router.get("/users", UserCtrl.getUser);


// router.put("/users/:id", UserCtrl.updateUser);


// router.delete("/users/:id", UserCtrl.removeUser);

// router.post('/users', function(req, res, next){
    
// });
// router.put('/users/:id', function(req, res, next){
//     User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
//         User.findOne({_id: req.params.id}).then(function(user){
//             res.send(user);
//         });
//         res.send('Data successfully updated');
//     });
// });
// router.delete('/users/:id', function(req, res, next){
//     User.findByIdAndRemove({_id: req.params.id}).then(function(user){
//         res.send(user);
//     });
// });

module.exports = router;