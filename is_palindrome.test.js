const is_perm = require("./array_and_strings/is_palindrome");

describe('Checking for palindrome permutation', () => {
	let comparisons = [
		{string: 'taco cat', toBe: true},
		{string: 'cacapipi', toBe: true},
		{string: 'cacaypipi', toBe: true},
		{string: 'cocaypipi', toBe: false},
		{string: '', toBe: true},
		{string: 'abc', toBe: false},
		{string: 'a b g h g a bz', toBe: false},
	];

	comparisons.forEach(singleTest=>{
		test(`Checking for ${singleTest.string}`, () => {
			expect(is_perm(singleTest.string)).toBe(singleTest.toBe);
		})
	});
	
})