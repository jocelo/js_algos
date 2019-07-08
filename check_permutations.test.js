const is_perm = require("./array_and_strings/is_permutation.js");

let leftStr = 'dog',
	rightStr = 'god';

test(`Comparing ${leftStr} vs ${rightStr}`, () => {
	expect(is_perm(leftStr, rightStr)).toBe(true);
})

let leftStr2 = 'Dog',
rightStr2 = 'god';

test(`Comparing ${leftStr2} vs ${rightStr2}`, () => {
	expect(is_perm(leftStr2, rightStr2)).toBe(false);
})