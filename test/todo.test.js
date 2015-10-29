/**
 * Created by Tink on 2015/10/29.
 */
var app = require('../server');
var supertest = require('supertest');
var request = supertest(app);
var should = require('should');
var constant = require('../constant');
var ErrorCode = constant.ErrorCode;
var Recurrence = constant.TodoRecurrence;
var Priority = constant.TodoPriority;


describe('#todo controller', function(){
    describe('#create', function(){
        it('should post /todo 200', function(done){
            request.post('/todo')
                .send({
                    title: '测试',
                    desc: '单纯的测试一下',
                    actor: "563193302e9baa7c29c8bf71",
                    recurrence: Recurrence.EVERY_WEEK,
                    priority: Priority.NORMAL,
                    selectedDates: [1, 2]
                })
                .expect(200, function(err){
                    done(err);
                });
        });
        it('should post /todo 403 when actor not existed', function(done){
            request.post('/todo')
                .send({
                    title: '测试',
                    desc: '单纯的测试一下',
                    actor: "563193302e9baa7c29c8bf77",
                    recurrence: Recurrence.EVERY_WEEK,
                    priority: Priority.NORMAL,
                    selectedDates: [1, 2]
                })
                .expect(403, function(err, res){
                    res.text.should.containEql(ErrorCode.NOT_EXISTED);
                    done(err);
                });
        })
    });
});