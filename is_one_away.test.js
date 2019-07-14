const is_one_away = require("./array_and_strings/one_away");

describe('Checking two strings for one being one edit away from the other', () => {
	let comparisons = [
		// initial values
		{left: '', right: '', toBe: true},

		// update
		{left: 'paco', right: 'paco', toBe: true},
		{left: 'paco', right: 'paca', toBe: true},
		{left: 'paca', right: 'paco', toBe: true},
		{left: 'paco', right: 'xaco', toBe: true},
		{left: 'zaco', right: 'paco', toBe: true},
		{left: 'bako', right: 'paco', toBe: false},
		{left: 'paco', right: 'peca', toBe: false},
		{left: 'paco', right: 'babo', toBe: false},
		{left: 'zazo', right: 'paco', toBe: false},

		// insert
		{left: 'paco', right: 'pacas', toBe: false},
		{left: 'paco', right: 'pacos', toBe: true},
		{left: 'pacos', right: 'paco', toBe: true},
		{left: 'xpaco', right: 'paco', toBe: true},
		{left: 'paco', right: 'zpaco', toBe: true},
		{left: 'paco', right: 'expaco', toBe: false},
		{left: 'sapaco', right: 'paco', toBe: false},

		// delete
		{left: 'paco', right: 'pco', toBe: true},
		{left: 'paco', right: 'aco', toBe: true},
		{left: 'paco', right: 'pao', toBe: true},
		{left: 'paco', right: 'pac', toBe: true},
		{left: 'pac', right: 'paco', toBe: true},
		{left: 'pco', right: 'paco', toBe: true},
		{left: 'aco', right: 'paco', toBe: true},
		{left: 'pacotilla', right: 'paco', toBe: false},
		{left: 'paco', right: 'pacotolla', toBe: false},
	];

	comparisons.forEach(singleTest=>{
		test(`is ${singleTest.left} 1 edit away from ${singleTest.right} ?`, () => {
			expect(is_one_away(singleTest.left, singleTest.right)).toMatch(singleTest.toBe);
		})
	});
	
})