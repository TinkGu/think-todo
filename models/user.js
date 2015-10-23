/**
 * Created by Tink on 2015/10/23.
 */
var Schema = require('mongoose').Schema;
var ObjectId = require('mongoose').ObjectId;
var Buffer = require('mongoose').Buffer;
var Todo = require('./todo');

var User = new Schema({
    name: String,
    pass: String,
    avatar: Buffer,
    createDate: {type: Date, default: Date.now},
    groups: [ObjectId],
    friends: [ObjectId],
    todos: [Todo],
    online: Boolean
});

module.exports = User;