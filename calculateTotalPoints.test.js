const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    describe('Total points test', () => {
        it('should return correct amount of total points', () => {
            const actual = calculateTotalPoints(111, "N", 98, [19, 19.5, 19, 19, 19], -14.4 , 3.2);
    
            const expected = 131.8;
    
            assert.equal(actual, expected);
        });

    });
});