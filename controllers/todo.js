/**
 * Created by Tink on 2015/10/24.
 */
var async = require('asyncawait').async;
var await = require('asyncawait').await;
var models = require('../models');
var Todo = models.todo;
var Service = require('../services/base');

exports.createOne = async(function(req, res){
    var title = req.body.title;
    var desc = req.body.desc;
    var actor = req.body.actor;


});
//
//exports.addGoals();
//
//exports.addSelectedDates();
//
//exports.addSelectedDaysInAWeek();
//
//exports.addTips();
//
//exports.find();
//
//exports.findOne();
//
//exports.findGoals();
//
//exports.findByGoal();
//
//exports.findByTitle();
//
//exports.findInAPeriod();
//
//exports.findInOneDay();
//
//exports.findInToday();
//
//exports.findInTomorrow();
//
//exports.findInThisWeek();
//
//exports.findInThisMonth();
//
//exports.delete();
//
//exports.removeFromCalendar();
//
//exports.removeGoals();
//
//exports.update();
//
//exports.inheritForm();
//
//exports.complete();
//
//exports.overdate();