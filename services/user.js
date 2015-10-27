/**
 * Created by Tink on 2015/10/24.
 */
var async = require('asyncawait').async;
var await = require('asyncawait').await;
var models = require('../models');
var User = models.user;

exports.hasExisted = async(function(query){
   try{
       var user = await(User.findOne(query).exec());
   }catch(err){
       console.log(err);
   }
   if(typeof user === 'undefined'){
       return false;
   }else{
       return true;
   }
});

//exports.getBaseInfo = function(name, id) {
//    try {
//        if (typeof name !== 'undefined') {
//            return User.findOne({name: name}).exec();
//        }
//        if (typeof id !== 'undefined') {
//            return User.findById(id).exec();
//        }
//    } catch (err) {
//        console.log(err);
//        return null;
//    }
//    return null;
//};
