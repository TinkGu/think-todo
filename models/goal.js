/**
 * Created by Tink on 2015/10/23.
 */
var Schema = require('mongoose').Schema;
var ObjectId = require('mongoose').ObjectId;

var Goal = new Schema({
    name: String,
    desc: String,
    level: String,
    score: Number, // 经验值



});

module.exports = Goal;