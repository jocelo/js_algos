const is_rotation = require("./array_and_strings/is_rotation");

describe('Checking for what', () => {
	let comparisons = [
		{left: '', right: '', toBe: true},
		{left: '21', right: '12', toBe: true},
		{left: 'waterbotle', right: 'erbotlewat', toBe: true},
		{left: 'aaaata', right: 'ataaaa', toBe: true},
		{left: 'test123', right: '12', toBe: false},
	];

	comparisons.forEach(singleTest=>{
		test(`Checking for ${singleTest.left}`, () => {
			expect(is_rotation(singleTest.left, singleTest.right)).toBe(singleTest.toBe);
		})
	});
	
})