// Exercise 1.2
// Convert all the spaces from a string
// into a URL version of it: 
// http://test one = http://test%20one

// Solution 1:
// 
using_arraymap = (normalUrl) => {
	const parsedUrl = normalUrl.split('').map(oneChar=>{
		if (oneChar === ' ') {
			return '%20';
		} else {
			return oneChar;
		}
	}).join('');

	return parsedUrl;
}

parsing_in_reverse = (normalUrl) => {
	let parsedUrl = [];
	for (let i=normalUrl.length-1 ; i>=0 ; i-- ) {
		parsedUrl.unshift(normalUrl[i] === ' ' ? '%20' : normalUrl[i]);
	}
	return parsedUrl.join('');
}

parsing_in_reverse_vanilla = (normalUrl) => {
	let parsedUrl = '';
	for (let i = normalUrl.length ; i >= 0 ; i--) {
		if (normalUrl[i] === '') {
			parsedUrl = '%20'+parsedUrl;
		} else {
			parsedUrl = normalUrl[i] + parsedUrl;
		}
	}

	return parsedUrl;
}

module.exports = parsing_in_reverse;