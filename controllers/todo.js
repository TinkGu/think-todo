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
    var recurrence = req.body.recurrence;
    var priority = req.body.priority;
    var selectedDates = req.body.selectedDates;

    try{
        var user = await(Service.getOneExisted('user', {_id: actor}, res));
        var todoObj = {
            title: title,
            desc: desc,
            actor: actor,
            recurrence: recurrence,
            priority: priority,
        }
        if(typeof selectedDates[0] === 'number'){
            todoObj.selectedDaysInAWeek = selectedDates;
        }else{
            todoObj.selectedDates = selectedDates;
        }

        if(typeof desc === 'undefined'){
            delete todoObj.desc;
        }

        if(typeof priority === 'undefined'){
            delete todoObj.priority;
        }

        var todo = await(Service.create('todo', todoObj, res));

        return res.json({
            todo: todo
        });
    }catch(err){
        console.log(err.stack);
        return;
    }
});

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