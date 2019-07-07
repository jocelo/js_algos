// todo: create module to track timing (performance)

// a string has all unique characters

// solution 1
function main_function(token) {
	// over ascii char length
	if (token.length > 255) {
		return false;
	}
	let i=0;
	for ( ; i<token.length ; i++) {
		console.log(token[i]);
	}

	return false;
}

module.exports = main_function;
