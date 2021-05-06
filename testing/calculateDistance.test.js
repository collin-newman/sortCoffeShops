const calculateDistance = require('../helperFunctions/calculateDistance');

test('Calculates distance between two lat long coordinates', () => {
  expect(calculateDistance(1, 1, 10, 10)).toBe(876.9);
  expect(calculateDistance(50, 40, 50, -13)).toBe(2303.2);
  expect(calculateDistance(50, -60, 50, 60)).toBe(4674.3);
});