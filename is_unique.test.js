const is_unique = require("./array_and_strings/is_unique.js");

let testString = 'abc';
test(`Evaluating string: ${testString}`, () => {
	expect(is_unique(testString)).toBe(true);
})

testString = 'abcdefghijklmnopqrstuvwxyz';
test(`Evaluating string: ${testString}`, () => {
	expect(is_unique(testString)).toBe(true);
});

testString = 'a b c d';
test(`Evaluating string: ${testString}`, () => {
	expect(is_unique(testString)).toBe(false);
});

testString = 'a bcd';
test(`Evaluating string: ${testString}`, () => {
	expect(is_unique(testString)).toBe(true);
});

testString = 'a bcd';
test(`Evaluating string: ${testString}`, () => {
	expect(is_unique(testString)).toBe(true);
});

testString = ' ';
test(`Evaluating string: ${testString}`, () => {
	expect(is_unique(testString)).toBe(true);
});

testString = '';
test(`Evaluating string: ${testString}`, () => {
	expect(is_unique(testString)).toBe(true);
});