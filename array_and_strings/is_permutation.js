// Exercise 1.2
// Check if two strings are permutations of one another

// solution 1:
// sorring both strings and comparing them directly
sorting_strings = (firstStr, secondStr) => {
	const sortedFirstStr = firstStr.split('').sort().join('');
	const sortedSecondStr = secondStr.split('').sort().join('');
	console.log(sortedFirstStr,' - ',sortedSecondStr);
	return sortedFirstStr === sortedSecondStr;
}

module.exports = sorting_strings;