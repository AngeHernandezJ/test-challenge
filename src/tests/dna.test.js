const { default: expect } = require("expect");
const lookDNA = require("../dna.js");

test('Testing a correct string', () => {
    expect(lookDNA('CTAG')).toBe(true);
});

test('Testing an incorrect string, due to X', () => {
    expect(lookDNA('CTXG')).toBe(false);
});

test('Testing an incorrect string, due to lowercase', () => {
    expect(lookDNA('ctag')).toBe(false);
});

test('Testing an incorrect string, due to empty string', () => {
    expect(lookDNA('')).toBe(false);
});