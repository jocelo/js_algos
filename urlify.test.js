const urlify = require("./array_and_strings/urlify");

describe('Parsing URL string to convert spaces', () => {
	let comparisons = [
		{url: 'Mr John Smith', toBe: 'Mr%20John%20Smith'},
		{url: 'http:// test this stuff. com', toBe: 'http://%20test%20this%20stuff.%20com'},
		{url: '', toBe: ''},
		{url: '  ', toBe: '%20%20'},
	];

	comparisons.forEach(singleTest=>{
		test(`Checking for ${singleTest.url}`, () => {
			expect(urlify(singleTest.url)).toBe(singleTest.toBe);
		})
	});
	
})