// test/calculator.test.js

const chai = require('chai');
const expect = chai.expect;
const calculator = require('../app/calculator'); // Make sure the path is correct relative to this file

describe('Calculator Tests', function() {
    
    // Hook that runs after each test
    afterEach(function() {
        if (this.currentTest.state === 'passed') {
            console.log('Passed:', this.currentTest.title);
        }

        if (this.currentTest.state === 'failed') {
            console.log('Failed:', this.currentTest.title);
        }
    });

    it('add(5, 2) should return 7', function() {
        expect(calculator.add(5, 2)).to.equal(7);
    });

    it('add(5, 2) should not return 8', function() {
        expect(calculator.add(5, 2)).to.not.equal(8);
    });

    it('sub(5, 2) should return 3', function() {
        expect(calculator.sub(5, 2)).to.equal(3);
    });

    it('sub(5, 2) should not return 5', function() {
        expect(calculator.sub(5, 2)).to.not.equal(5);
    });

    it('mul(5, 2) should return 10', function() {
        expect(calculator.mul(5, 2)).to.equal(10);
    });

    it('mul(5, 2) should not return 12', function() {
        expect(calculator.mul(5, 2)).to.not.equal(12);
    });

    it('div(10, 2) should return 5', function() {
        expect(calculator.div(10, 2)).to.equal(5);
    });

    it('div(10, 2) should not return 2', function() {
        expect(calculator.div(10, 2)).to.not.equal(2);
    });
});
