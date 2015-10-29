/**
 * Created by Tink on 2015/10/23.
 */

var user = require('./controllers/user');
var todo = require('./controllers/todo');

module.exports = function route(app){


    // render
    app.get('/', function(req, res){
        res.render('index.html');
    });

    app.get('/sign', user.signIn);
    app.post('/sign', user.signUp);

    //
    //// todo
    //app.get()
    app.post('/todo', todo.createOne);

}