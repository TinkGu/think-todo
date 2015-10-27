/**
 * Created by Tink on 2015/10/24.
 */
var async = require('asyncawait').async;
var await = require('asyncawait').await;
var models = require('../models');
var User = models.user;
var errHandler = require('../middlewares/err_handler');
var UserService= require('../services/user');


    //name: String,
    //pass: String,
    //avatar: Buffer,
    //createDate: {type: Date, default: Date.now},
    //groups: [ObjectId],
    //friends: [ObjectId],
    //todos: [Todo],
    //online: Boolean

exports.sign = async(function(req, res, next){
    var username = req.query.username;
    var pass = req.query.pass;

    try{
        var user = await(User.findOne({name: username, pass: pass}).exec());
    }catch(err){
        return errHandler.dbErr(res, err);
    }
    if(typeof user === 'null'){
        return errHandler.notFound(res, 'user');
    }
    var userObj = user.toObject();
    delete userObj.pass;

    // token 设置
    return res.json({
        user: userObj
    });
});

exports.create = async(function(req, res, next){
    var name = req.body.name;
    var pass = req.body.pass;
    var email = req.body.email;

    try{
        var sameNameUser = await(User.findOne({name: name}).exec());
    }catch(err){
        return errHandler.dbErr(res, err);
    }
    if(sameNameUser){
        return errHandler.alreadyExist(res, 'user ' + name);
    }

    try{
        var sameEmailUser = await(User.findOne({email: email}).exec());
    }catch(err){
        return errHandler.dbErr(res, err);
    }
    if(sameEmailUser){
        return errHandler.alreadyExist(res, 'user ' + email);
    }

    var userobj = {
        name: name,
        email: email,
        pass: pass
    };
    var user = await(User.create(userobj));

    return res.status(200).end();
});

exports.update = async(function(req, res, next){
    var name = req.params.name;


});

exports.updateName = async(function(req, res, next){
    var name = req.params.name;
    var newName = req.params.newName;

    if(await(UserService.hasExisted({name: name}))){

    }

})

exports.delete();

exports.find();

exports.findOne();

exports.findOneWithPass();

exports.getFriends();

exports.getGroups();

exports.getTodos();

exports.getOnlineFriends();

exports.removeGroups();

exports.removeFriends();

exports.removeTodos();