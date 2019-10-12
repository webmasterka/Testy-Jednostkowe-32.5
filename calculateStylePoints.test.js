const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    describe('Array test', () => {
        it('should return sum of points', () => {
            const actual = calculateStylePoints([16,17,16.5,16,18]);
    
            const expected = 49.5;
    
            assert.equal(actual, expected);
        });

        it('should convert string to number if it is possible', () => {
            const actual = calculateStylePoints(["16",17,"16.5",16,"18"]);
    
            const expected = 49.5;
    
            assert.equal(actual, expected);
        });

        it('should return false if any value from array is not a number', () => {
            const actual = calculateStylePoints(["aaaa",17,"sdas",16,"r"]);
            const expected = false;
    
            assert.equal(actual, expected);
        });

        it('should return false if array has different size than 5', () => {
            const actual = calculateStylePoints([17,"2",16,"1"]);
            const expected = false;
    
            assert.equal(actual, expected);
        });
    });
});