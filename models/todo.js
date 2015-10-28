/**
 * Created by Tink on 2015/10/23.
 */
var Schema = require('mongoose').Schema;
var ObjectId = require('mongoose').Schema.Types.ObjectId;
var constant = require('../constant');
var Tip = require('./tip');

var GoalPair = new Schema({
    goalId: ObjectId,
    score: Number, // 完成这次日程后, goalId指向的目标增长的经验值
});


var Todo = new Schema({
    title: String,
    desc: String,
    actor: ObjectId, // 执行者
    recurrence: {type: String}, // 日程重复模式
    status: {type: String, default: constant.TodoStatus.ONGOING},
    priority: {type: String, default: constant.TodoPriority.NORMAL}, // 日程优先级
    createDate: {type: Date, default: Date.now},
    nextDeadline: Date, // 下次提醒的日期
    selectedDates: [Date],
    selectedDaysInAWeek: [Number],

    // 可选属性
    parentId: ObjectId, // 派生出该日程的父日程
    goalPairs: [GoalPair],
    tips: [Tip], // 小贴士列表, 可以关联地显示在日程中
    completionRate: Number, // 完成百分比, (根据数值还能决定评级)


});

module.exports = Todo;