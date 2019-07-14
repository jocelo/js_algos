const str_comp = require("./array_and_strings/string_compression");

describe('Checking for what', () => {
	let comparisons = [
		{string: 'aaaabbbbccccccddddef', toBe: 'a4b4c6d4e1f1'},
		{string: 'abcde', toBe: 'abcde'},
		{string: 'xy', toBe: 'xy'},
		{string: '', toBe: ''},
		{string: 'xyy', toBe: 'x1y2'},
		{string: 'xxy', toBe: 'x2y1'},
	];

	comparisons.forEach(singleTest=>{
		test(`Checking for ${singleTest.string}`, () => {
			expect(str_comp(singleTest.string)).toBe(singleTest.toBe);
		})
	});
	
})