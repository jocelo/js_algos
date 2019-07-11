const is_one_away = require("./array_and_strings/one_away");

describe('Checking two strings for one being one edit away from the other', () => {
	let comparisons = [
		{left: 'pacoo', right: 'pac', toBe: true},
	];

	comparisons.forEach(singleTest=>{
		test(`is ${singleTest.left} 1 edit away from ${singleTest.right}`, () => {
			expect(is_one_away(singleTest.left, singleTest.right)).toBe(singleTest.toBe);
		})
	});
	
})