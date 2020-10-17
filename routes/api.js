const express = require('express');
const router = express.Router();
const User = require('../models/user_model');

router.get('/users', function(req, res){
    User.find({}).then(function(users){
        res.send(users)
    });
});
router.post('/users', function(req, res, next){
    console.log('post requested')
    User.create(req.body).then(function(user){
        res.send(user);
    });
});
router.put('/users/:id', function(req, res, next){
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        User.findOne({_id: req.params.id}).then(function(user){
            res.send(user);
        });
        res.send('Data successfully updated');
    });
});
router.delete('/users/:id', function(req, res, next){
    User.findByIdAndRemove({_id: req.params.id}).then(function(user){
        res.send(user);
    });
});

module.exports = router;