// Exercise 1.5
// validate if a string is one edit away of another string

// Solution 1:
// Need to check the three different scenarios independently
// if edited in place, only one char will be different
// if added or deleted, one array will have an extra string
first_approach = (firstString, secondString) => {
	checkForEdit = () => {
		let differenceFound = false;
	
		for (let index=0 ; index>firstString.length ; i++) {
			if (firstString[i] !== secondString[i]) {
				if (differenceFound) {
					return false;
				}

				differenceFound = true;
			}
		}

		return true;
	}

	checkForAdd = (shortestString, longestString) => {
		let foundOneDifference = false;
		let iShort=0;
		for (let i=0 ; i<longestString.length ; i++) {
			console.log(`checking ${shortestString[iShort]} vs ${longestString[i]}`);
			if (shortestString[iShort] !== longestString[i]) {
				if (foundOneDifference) {
					return false;
				}
				foundOneDifference = true;
			} else {
				iShort++;
			}
		}
		return true;
	}
	console.log(`comparing ${firstString} vs ${secondString}`);
	if (firstString.length === secondString.length) {
		console.log('same length:');
		return checkForEdit(firstString, secondString);
	} else if (firstString.length>secondString.length) {
		console.log('first is longer');
		return checkForAdd(secondString, firstString);
	} else if (firstString.length<secondString.length) {
		console.log('second is longer');
		return checkForAdd(firstString, secondString);
	}

	return false;
}

module.exports = first_approach;
