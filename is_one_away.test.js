const is_one_away = require("./array_and_strings/one_away");

describe('Checking two strings for one being one edit away from the other', () => {
	let comparisons = [
		{left: 'poca', right: 'poco', toBe: true},
		{left: 'poca', right: 'puc', toBe: false}
	];

	comparisons.forEach(singleTest=>{
		test(`is ${singleTest.left} 1 edit away from ${singleTest.right}`, () => {
			expect(is_one_away(singleTest.left, singleTest.right)).toBe(singleTest.toBe);
		})
	});
	
})