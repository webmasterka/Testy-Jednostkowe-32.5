const calculateStylePoints = (styleNotes) => {

	if(checkArrayLength(styleNotes)){
		console.log("tablica ma zły rozmiar " + styleNotes.length);
		return false;
	}

	styleNotes = stringToNum(styleNotes);

	if(!checkNumbers(styleNotes)) {
		console.log(styleNotes + " tablica ma niepoprawne wartości");
		return false;
	}

	styleNotes = removeSmallNote(styleNotes);
	styleNotes = removeBigNote(styleNotes);

	const sum = styleNotes.reduce((partial_sum, a) => partial_sum + a); 
	console.log("Punkty za styl: " + sum);
	return sum;
};

function checkNumbers(array) {
	let flag = true;
	array.forEach(element => {
		if(!isFinite(element) || element < 0 || element > 20 || Number.isNaN(element)){
			//console.log(element + "  Ma niepoprawną wartość" );
			flag = false;
		}
	});
	return flag;
}

function stringToNum(array) {
	let tempArr = []
	array.forEach(element => {
		tempArr.push(Number(element));
	});
	// console.log(tempArr);
	return tempArr;
}


function removeSmallNote(styleNotes) {
	let minVal = Math.min(...styleNotes);
	styleNotes.splice(styleNotes.indexOf(minVal),1);
	return styleNotes;
}

function removeBigNote(styleNotes) {
	let maxVal = Math.max(...styleNotes);
	styleNotes.splice(styleNotes.indexOf(maxVal),1);
	return styleNotes;
}

function checkArrayLength(array) {
	if (array.length !== 5) {
		return true;
	}
}

//calculateStylePoints([8,16.5,16,"2"]);


module.exports = calculateStylePoints;