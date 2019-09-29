function memo(fn) {
	const cache = {};

	return function(...args){
		if (cache[args]) {
			return cache[args];
		}

		const result = fn(args);
		cache[args] = result;
		return result;
	}
}

function child_steps_slow(n) {
	if (n < 0) {
		return 0;
	}

	if (n == 0) {
		return 1;
	}

	return child_steps(n-1) + child_steps(n-2) + child_steps(n-3);
}

const child_steps = memo(child_steps_slow);

console.log( child_steps(1), ' for (1) really is:', 1 );
console.log( child_steps(2), ' for (2) really is:', 2 );
console.log( child_steps(3), ' for (3) really is:', 4 );
console.log( child_steps(4), ' for (4) really is:', 7 );
console.log( child_steps(5), ' for (5) really is:', 13 );
console.log( child_steps(15), ' for (15) really is:', 5768 );
console.log( child_steps(20), ' for (20) really is:', 121415 );
