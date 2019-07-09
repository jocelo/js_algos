const urlify = require("./array_and_strings/urlify");

describe('Parsing URL string to convert spaces', () => {
	let comparisons = [
		{url: 'Mr John Smith', toBe: 'Mr%20John%20Smith'},
	];

	comparisons.forEach(singleTest=>{
		test(`Checking for ${singleTest.url}`, () => {
			expect(urlify(singleTest.url)).toBe(singleTest.toBe);
		})
	});
	
})