// Exercise 1.6: String Compression
// Compress repeated strings into a number and return the compressed version
// return the same string if no compression was made
// i.e. aaaabbcddddd = a4b2cd5

compress = (longString) => {
	let compressedString = '';
	let counter = 0;

	for (let i=0 ; i<longString.length ; i++) {
		counter++;
		if (longString[i] !== longString[i+1]) {
			compressedString += longString[i]+counter;
			counter=0;
		}
	}
	if (longString.length*2 == compressedString.length) {
		return longString;
	}
	return compressedString;
}

let string = 'aaaabbdddadbdcdebdggzzz';
console.log( string, compress(string) );

string = 'abcdefg';
console.log( string, compress(string) );