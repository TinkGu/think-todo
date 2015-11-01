/**
 * Created by Tink on 2015/10/29.
 */
var app = require('../server');
var supertest = require('supertest');
var request = supertest(app);
var should = require('should');

//describe('test/controllers/user.test.scripts', function(){
//
//    describe('#signUp', function(){
//        it('should post /sign 200', function(done){
//            request.post('/sign')
//                .send({
//                    name: 'test123',
//                    pass: '123',
//                    email: 'testmail123'
//                })
//                .end(function(err, res){
//                    res.status.should.equal(200);
//                    done(err);
//                });
//        });
//        it('should reject user that his name has existed', function(done){
//            request.post('/sign')
//                .send({
//                    name: 'weibo',
//                    pass: '123',
//                    email: 'email'
//                })
//                .expect(403, function(err, res){
//                    res.text.should.containEql('already existed');
//                    done(err);
//                });
//        });
//        it('should reject user that his email has existed', function(done){
//            request.post('/sign')
//                .send({
//                    name: 'name',
//                    pass: '123',
//                    email: 'testmail123'
//                })
//                .expect(403, function(err, res){
//                    res.text.should.containEql('already existed');
//                    done(err);
//                });
//        });
//    });
//
//    describe('#signIn', function(){
//        it('should get /sign 200', function(done){
//            request.get('/sign')
//                .query({
//                    name: 'weibo',
//                    pass: '123'
//                })
//                .expect(200, function(err, res){
//                    done(err);
//                });
//        });
//        it('should get /sign 403 when it does not exist', function(done){
//            request.get('/sign')
//                .query({
//                    name: 'weibo',
//                    pass: '124'
//                })
//                .expect(403, function(err, res){
//                    res.text.should.containEql('not existed');
//                    done(err);
//                });
//        });
//    });
//});