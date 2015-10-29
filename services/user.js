/**
 * Created by Tink on 2015/10/29.
 */
var async = require('asyncawait').async;
var await = require('asyncawait').await;
var models = require('../models');
var User = models.user;
var errorHandler = require('../middlewares/err_handler');
var ErrorCode = errorHandler.ErrorCode;
var genErrorMessage = errorHandler.genErrorMessage;

var getOne = async(function(condition, res){
    try{
        return await(User.findOne(condition).exec());
    }catch(err){
        res.status(500).end();
        throw err;
    }
});

var getOneExisted = async(function(condition, res){
    var user = await(getOne(condition, res));
    if(!user){
        res.status(403).json({error: ErrorCode.NOT_EXISTED});
        throw new Error(genErrorMessage.notExisted('user', condition));
    }
    return user;
});

var checkUnique = async(function(condition, res){
    var user = await(getOne(condition, res));
    if(user){
        res.status(403).json({err: ErrorCode.ALREADY_EXISTED});
        throw new Error(genErrorMessage.alreadyExisted('user', condition));
    }
});

module.exports = {
    getOne: getOne,
    getOneExisted: getOneExisted,
    checkUnique: checkUnique
}
