/**
 * Created by Tink on 2015/10/23.
 */

var user = require('./controllers/user');

module.exports = function route(app){


    // render
    app.get('/', function(req, res){
        res.render('index.html');
    });

    app.get('/signIn', user.signIn);
    app.post('/signUp', user.signUp);

    //
    //// todo
    //app.get()

}