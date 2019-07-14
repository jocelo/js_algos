const str_comp = require("./");

describe('Checking for what', () => {
	let comparisons = [
		{string: 'aaaabbbbccccccddddef', toBe: true},
		{string: 'aaaabbbbccccccddddef', toBe: true},
		{string: 'aaaabbbbccccccddddef', toBe: true},
		{string: 'aaaabbbbccccccddddef', toBe: true}
	];

	comparisons.forEach(singleTest=>{
		test(`Checking for ${singleTest.left}`, () => {
			expect(is_perm(singleTest.left)).toBe(singleTest.toBe);
		})
	});
	
})