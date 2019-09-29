// n stairs by 1,2 or 3 steps

var dynamic = {};
var total = 0;

function memoize(fn) {
	const cache = {};
	return function(...args) {
		if (cache[args]) {
			return cache[args];
		}

		const result = fn.apply(this, args);
		cache[args] = result;

		return result;
	}
}

function howManyWays(n, loop=0) {
	if (dynamic[n]) {
		return dynamic[n];
	}

	if (n<0) {
		return 0;
	} else if (n==0) {
		return 1;
	}

	return newHowMany(n-1) + newHowMany(n-2) + newHowMany(n-3);
}

const newHowMany = memoize(howManyWays);

console.log( newHowMany(11) );

// console.log(howMany(50));