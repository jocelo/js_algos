const is_unique = require("./array_and_strings/is_unique.js");

const oneStr = 'abcgeyqosmjn';
test(`Evaluating string: `, () => {
	expect(is_unique(oneStr)).toBe(true);
})