const rotation_validation = require("./array_and_strings/rotate_matrix");

describe('Checking for Matrix rotation', () => {
	let comparisons = [
		{matrix: [[1]], toBe: [[1]]},
		{matrix: [[1,2],[1,2]], toBe: [[1,1],[2,2]]},
		{matrix: [[1,2,3],[4,5,6],[7,8,9]], toBe: [[7,4,1],[8,5,2],[9,6,3]]},
		{matrix: [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], toBe: [[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]]},
	];

	comparisons.forEach(singleTest=>{
		test(`Checking for ${singleTest.matrix}`, () => {
		expect(rotation_validation(singleTest.matrix)).toEqual(singleTest.toBe);
		})
	});
	
})