// Exercise 1.3
// Check if two strings are permutations of a palindrome
// means a different arrangement of letters from a word that is a palindrome

// solution 1:
// if word is even, we must have even count of all characters
// of word is odd, we must have only one char that is odd

check_palindromness = (word) => {
	// constructing hash table with the letters
	const hashLetters = {};
	let lowerCase = '';
	let lowerCaseValue = 0;
	
	for(let char of word) {
		lowerCase = char.toUpperCase();
		lowerCaseValue = lowerCase.charCodeAt(0);
		if (lowerCaseValue < 65 || lowerCaseValue > 90) {
			continue;
		}

		if (!hashLetters[lowerCase]) {
			hashLetters[lowerCase] = 0;
		}
		hashLetters[lowerCase]++;
	}

	// this section will validate the true form of our string
	let oddLetters = 0;
	let result = true;
	for (let i in hashLetters) {
		if (hashLetters[i]%2 === 0) {
			continue;
		}
		oddLetters++;
		if (oddLetters > 1) {
			result = false;
			break;
		}
	}

	return result;
}

// Solution 2:
// Avoiding alltogheter the second iteration
// if we check during the first iteration if we have something wrong with the string
// TBD

module.exports = check_palindromness;