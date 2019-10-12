const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);

  let totalPoints = distancePoints + stylePoints + windFactor + gateFactor;
  totalPoints = totalPoints.toFixed(1);
  console.log(totalPoints);
  return totalPoints;
}

calculateTotalPoints(111, "N", 98, [19, 19.5, 19, 19, 19], -14.4 , 3.2);




module.exports = calculateTotalPoints;