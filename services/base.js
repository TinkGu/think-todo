/**
 * Created by Tink on 2015/10/29.
 */
var async = require('asyncawait').async;
var await = require('asyncawait').await;
var models = require('../models');
var errorHandler = require('../middlewares/err_handler');
var ErrorCode = errorHandler.ErrorCode;
var genErrorMessage = errorHandler.genErrorMessage;

var getOne = async(function(model, condition, res){
    try{
        return await(models[model].findOne(condition).exec());
    }catch(err){
        res.status(500).end();
        throw err;
    }
});

var getOneExisted = async(function(model, condition, res){
    var doc = await(getOne(model, condition, res));
    if(!doc){
        res.status(403).json({error: ErrorCode.NOT_EXISTED});
        throw new Error(genErrorMessage.notExisted(model, condition));
    }
    return doc;
});

var checkUnique = async(function(model, condition, res){
    var doc = await(getOne(model, condition, res));
    if(doc){
        res.status(403).json({err: ErrorCode.ALREADY_EXISTED});
        throw new Error(genErrorMessage.alreadyExisted(model, condition));
    }
});

module.exports = {
    getOne: getOne,
    getOneExisted: getOneExisted,
    checkUnique: checkUnique
}