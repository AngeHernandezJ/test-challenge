const { default: expect } = require('expect');
const factorial = require('../factorial.js');

test('Testing if the factorial of the positive number can be calculated', () => {
    expect(factorial(4)).toBe(24);
});

test('Testing if the factorial of the neutral number 0 can be calculated', () => {
    expect(factorial(0)).toBe(1);
});

test('Testing if the factorial of the negative number can be calculated', () => {
    expect(factorial(-4)).toBe(false);
});