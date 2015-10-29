/**
 * Created by Tink on 2015/10/24.
 */

var constant = require('../constant');
var ErrorCode = constant.ErrorCode;

var genErrorMessage = {
    notExisted: function(entity, condition){
        return genQueryError('this ' + entity + ' does not exist!', condition);
    },
    alreadyExisted: function(entity, condition){
        return genQueryError('this ' + entity + ' has already existed!', condition);
    }
}

var genQueryError = function(desc, condition){
    return desc + ' \n see query condition: ' + JSON.stringify(condition);
}


module.exports = {
    ErrorCode: ErrorCode,
    genErrorMessage: genErrorMessage
}