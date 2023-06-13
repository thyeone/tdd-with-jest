const Calculator = require('../src/calculator');

/* Mathers */

// pass
test('1 + 5 = 6', () => {
  expect(Calculator(1, 5)).toBe(6);
});

// fail
test('2 + 3 = 5', () => {
  expect(Calculator(2, 3)).toBe(6);
});

// pass
test('2 + 3 = 5', () => {
  expect(Calculator(2, 3)).not.toBe(6);
});
