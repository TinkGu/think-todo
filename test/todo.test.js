/**
 * Created by Tink on 2015/10/29.
 */
var app = require('../server');
var supertest = require('supertest');
var request = supertest(app);
var should = require('should');

describe('#todo controller', function(){
    describe('#create', function(){
        it('should post /todo 200', function(done){
            request.post('/todo')
        });
    });
});