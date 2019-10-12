const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('Distance test', () => {
        it('should return correct amount of points points for distance', () => {
            const actual = calculateDistancePoints(99.5, "N", 98);
    
            const expected = 63;
    
            assert.equal(actual, expected);
        });

        it('should return correct amount of points for distance', () => {
            const actual = calculateDistancePoints(91.5, "N", 98);
    
            const expected = 47;
    
            assert.equal(actual, expected);
        });


        it('should return false if type of hill is different than string', () => {
            const actual = calculateDistancePoints(91.5, 1, 98);
    
            const expected = false;
    
            assert.equal(actual, expected);
        });

        it('should return false if hill is different than N, B or M', () => {
            const actual = calculateDistancePoints(91.5, "A", 98);
    
            const expected = false;
    
            assert.equal(actual, expected);
        });

        it('should return correct value for distance for hill size in lowercase', () => {
            const actual = calculateDistancePoints(91.5, "m", 98);
    
            const expected = 112.2;
    
            assert.equal(actual, expected);
        });
    });
});