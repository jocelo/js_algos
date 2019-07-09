const is_perm = require("./array_and_strings/is_permutation.js");


describe('Checking permutations', () => {

	let comparisons = [
		{left: 'dog', right: 'god', toBe: true},
		{left: 'dog', right: 'goD', toBe: false},
		{left: 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+', right: '+_)(*&^%$#@!0987654321abcdefghijklmnopqrstuvwxyz', toBe: true},
		{left: 'abc', right: 'cba ', toBe: false},
		{left: 'kee!', right: '!eek', toBe: true},
		{left: 'x     y', right: 'xy', toBe: false},
		{left: '', right: '', toBe: true},
		{left: '', right: 'z', toBe: false},
		{left: 'a', right: '', toBe: false},
		{left: 'a', right: 'A', toBe: false},
	];

	comparisons.forEach(singleTest=>{
		test(`Comparing ${singleTest.left} vs ${singleTest.right}`, () => {
			expect(is_perm(singleTest.left, singleTest.right)).toBe(singleTest.toBe);
		})
	});
	
})
