/**
 * Created by Tink on 2015/10/23.
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var routes = require('./routes');

var app = express();
var server = require('http').createServer(app);

// port setup
app.set('port', process.env.PORT || 3000);

// view engine setup
app.set('views', path.join(__dirname, 'public/views'));

// favicon setup, place icon under /public
// var favicon = require('serve-favicon');
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

routes(app);

// error handler

//server listener
server.listen(app.get('port'), function serverListener(){
    console.log('Server is listening on port: ' + app.get('port'));
});

module.exports = app;