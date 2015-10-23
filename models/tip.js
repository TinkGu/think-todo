/**
 * Created by Tink on 2015/10/23.
 */
var Schema = require('mongoose').Schema;

var Tip = new Schema({
    key: String,
    value: String
});

module.exports = Tip;