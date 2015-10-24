/**
 * Created by Tink on 2015/10/23.
 */
var mongoose = require('mongoose');
var config = require('../config');

// mongodb connection
mongoose.connect(config.dbConnectionString);
var db = mongoose.connection;

// db err log
db.on('err', function errLog(err){
    console.error('mongoose: connect to %s error: ', config.dbConnectionString, err, message);
    process.exit(1);
});

// db start log
db.once('open', function openLog(){
    console.log('mongoose: %s has been connected ', config.dbConnectionString);
});

// dao
module.exports = {
    user: mongoose.model('user', require('./user')),
    todo: mongoose.model('todo', require('./todo')),
    goal: mongoose.model('goal', require('./goal'))

}
