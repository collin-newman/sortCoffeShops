const generateShops = require('../helperFunctions/generateShops');

test('It generates the correct number of shops', () => {
  expect(generateShops(10).length).toBe(10);
  expect(generateShops(20).length).toBe(20);
  expect(generateShops(30).length).toBe(30);
});

test('It generates a list of shops with the correct properties', () => {
  const shops = generateShops(10);
  let result = true;

  for (let i = 0; i < shops.length; i++) {
    if (shops[i].name && shops[i].location && shops[i].rating && shops[i].picture && shops[i].typesOfCoffee) {
      continue;
    }
    if (Object.keys(shops[i]) === 5) {
      continue;
    }
    result = false;
    break;
  }

  expect(result).toBe(true);

});