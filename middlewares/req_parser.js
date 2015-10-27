/**
 * Created by Tink on 2015/10/27.
 */

module.exports = {
    // params: /user/:id
    // body: {}
    // query: /user?username=xx
    parseProp: function parse(req, prop){
        return req.body[prop] || req.query[prop] || req.params[prop];
    }
}