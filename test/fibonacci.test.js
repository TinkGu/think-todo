/**
 * Created by Tink on 2015/10/28.
 */
var fibonacci = require('./fibonacci');
var should = require('should');

describe('test/fibonacci.test.js', function(){
    it('should equal 55 when n === 10', function(){
        fibonacci.fibonacci(10).should.equal(55);
    });
});
