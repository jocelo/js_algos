const is_perm = require("./");

describe('Checking for what', () => {
	let comparisons = [
		{left: '1', right: '2', toBe: true},
		{left: '1', right: '3', toBe: false}
	];

	comparisons.forEach(singleTest=>{
		test(`Checking for ${singleTest.left}`, () => {
			expect(is_perm(singleTest.left)).toBe(singleTest.toBe);
		})
	});
	
})