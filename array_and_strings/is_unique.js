// Exercise 1.1
// validate if a string has all unique characters

// solution 1:
// Creat a hash table that holds each element one by one
// if a duplicate is found, the function is halted

creating_hash = (stringToValidate) => {
	// over ascii char length
	if (stringToValidate.length > 255) {
		return false;
	}

	const letters = {};
	let i=0;
	for ( ; i<stringToValidate.length ; i++) {
		if (letters[stringToValidate[i]]) {
			return false;
		}
		letters[stringToValidate[i]] = true;
	}

	return true;
}

// solution 2
// comparing each character of the string agains the rest of them
comparing_one_by_one = (string) => {
	let i = 0;
	let j = 0;

	const sizeOfString = string.length;
	
	for ( ; i<sizeOfString ; i++ ) {
		let token = string[i];
		j = i+1;
		// the rest of the elements on the string
		for ( ; j<sizeOfString ; j++) {
			if (token === string[j]) {
				return false;
			}
		}
	}
	return true;
}

module.exports = comparing_one_by_one;