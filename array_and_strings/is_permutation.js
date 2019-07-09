// Exercise 1.2
// Check if two strings are permutations of one another

// Solution 1:
// sorring both strings and comparing them directly
// since sorted, they should be exactly the same
sorting_strings = (firstStr, secondStr) => {
	const sortedFirstStr = firstStr.split('').sort().join('');
	const sortedSecondStr = secondStr.split('').sort().join('');
	console.log(sortedFirstStr,' - ',sortedSecondStr);
	return sortedFirstStr === sortedSecondStr;
}
// Solution 2:
// creating a hash table counting the chars on the left string
// then, looping through the second string, decrementing the first hash table
// finally, if the hash is all 0's the strings are the same
// if any negatives, exit immediately
negatives = (firstStr, secondStr) => {
	let zeros = {};
	let result = true;

	if (firstStr.length !== secondStr.length) {
		return false;
	}

	for (let i=0 ; i<firstStr.length ; i++) {
		if (!zeros[firstStr[i]]) {
			zeros[firstStr[i]] = 0;
		}
		zeros[firstStr[i]] = zeros[firstStr[i]]+1;
	}

	for (let i=0 ; i<secondStr.length ; i++) {
		if (!zeros[secondStr[i]]) {
			result = false;
			break;
		}
		zeros[secondStr[i]] = zeros[secondStr[i]]-1;

		if (zeros[secondStr[i]] < 0) {
			result = false;
			break;
		}
	}
	return result;
}

module.exports = negatives;