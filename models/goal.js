/**
 * Created by Tink on 2015/10/23.
 */
var Schema = require('mongoose').Schema;
var ObjectId = require('mongoose').ObjectId;

var Goal = new Schema({
    user: ObjectId,
    name: String,
    desc: String,
    level: Number,
    upgradeRequirement: Number, // 升级需求
    score: Number, // 经验值

    parentId: ObjectId



});

module.exports = Goal;