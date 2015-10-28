/**
 * Created by Tink on 2015/10/24.
 */
var async = require('asyncawait').async;
var await = require('asyncawait').await;
var models = require('../models');
var User = models.user;

exports.signIn = async(function(req, res, next){
    var name = req.query.name;
    var pass = req.query.pass;

    try{
        var user = await(User.findOne({name: name, pass: pass}).exec());
    }catch(err){
        return res.status(500).end();
    }

    if(!user){
        return res.status(403).json({error: name + ' is not exist!'});
    }

    var userObj = user.toObject();
    delete userObj.pass;

    return res.json({
        user: 'userObj'
    });
});

exports.signUp = async(function(req, res, next){
    var name = req.body.name;
    var pass = req.body.pass;
    var email = req.body.email;

    try{
        var sameNameUser = await(User.findOne({name: name}).exec());
    }catch(err){
        return res.status(500).end();
    }
    if(sameNameUser){
        return res.status(403).json({error: name + ' has already existed!'}).end();
    }

    try{
        var sameEmailUser = await(User.findOne({email: email}).exec());
    }catch(err){
        return res.status(500).end();
    }
    if(sameEmailUser){
        return res.status(403).json({error: email + ' has already existed!'}).end();
    }

    var userObj = {
        name: name,
        email: email,
        pass: pass
    };

    try{
        var user = await(User.create(userObj));
    }catch(err){
        return res.status(500).end();
    }

    return res.status(200).end();

});

//exports.updateName = async(function(req, res){
//    var name = req.params.name;
//    var newName = req.params.newName;
//
//    var user = await(UserService.getOne({name: name}));
//    if(typeof user === 'null'){
//        return res.status(403).end();
//    }
//
//    user.name = newName;
//    await(user.save());
//
//    return res.status(200).end();
//});
//
//exports.updatePass = async(function(req, res){
//    var name = req.params.name;
//    var newPass = req.params.newPass;
//
//    var user = await(UserService.getOne({name: name}));
//    if(typeof user === 'null'){
//        return res.status(403).end();
//    }
//
//    user.pass = newPass;
//    await(user.save());
//
//    return res.status(200).end();
//
//});
//
//exports.updateEmail = async(function(req, res){
//    var name = req.params.name;
//    var newEmail = req.params.newEmail;
//
//    var user = await(UserService.getOne({name: name}));
//    if(typeof user === 'null'){
//        return res.status(403).end();
//    }
//
//    user.email = newEmail;
//    await(user.save());
//
//    return res.status(200).end();
//});
//
//exports.deleteOne = async(function(req, res){
//    var name = req.params.name;
//
//
//});
//
//exports.find();
//
//exports.findOne();
//
//exports.findOneWithPass();
//
//exports.getFriends();
//
//exports.getGroups();
//
//exports.getTodos();
//
//exports.getOnlineFriends();
//
//exports.removeGroups();
//
//exports.removeFriends();
//
//exports.removeTodos();