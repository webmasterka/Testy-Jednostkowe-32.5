
const calculateDistancePoints = (distance, hillSize, kPoint) => {
  	let hillSizeMultiply, baseHillPoints;

    if(checkHill(hillSize)){
      return false;
    }
    if(checkDistance(distance)){
      return false;
    }

  	switch(hillSize.toUpperCase()){
  		case "N":
  			hillSizeMultiply = 2;
  			baseHillPoints = 60;
        break;
  		case "B":
  			hillSizeMultiply = 1.8;
  			baseHillPoints = 60;
        break;
		  case "M":
  			hillSizeMultiply = 1.2;
  			baseHillPoints = 120;
        break;
  		default:
  			hillSizeMultiply = 2;
  			baseHillPoints = 60;
  	}

	const additionalPoints = (distance - kPoint) * hillSizeMultiply;
	const distancePoints = baseHillPoints + additionalPoints;

	console.log("Punkty za dystans: " + distancePoints);
	return distancePoints;
};

function checkHill(hill) {
  if(typeof hill !== "string"){
    console.log("Niewłaściwy typ skoczni");
    return true;
  } else {
    switch(hill.toUpperCase()){
      case "N":
      case "B":
      case "M":
        return false;
      default:
        console.log("Niewłaściwy typ skoczni");
        return true;
    }
  }
}

function checkDistance(distance) {
  if(typeof distance !== "number"){
    console.log("Niewłaściwa wartość odlełości");
    return true;
  }
  return false;
}
//calculateDistancePoints(91.5, "m", 98);

module.exports = calculateDistancePoints;