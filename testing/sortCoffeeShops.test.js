const calculateDistance = require('../helperFunctions/calculateDistance');
const generateShops = require('../helperFunctions/generateShops');
const sortCoffeeShops = require('../sortCoffeeShops');
const shops = require('./sampleShops');

const customerLocation = [1, 1];

test('Sorts shops by rating', () => {
  const sortedShops = sortCoffeeShops(10000, shops, 'rating', customerLocation);
  expect(sortedShops[0].name).toBe('Max Rating');
  expect(sortedShops[sortedShops.length - 1].name).toBe('Min rating');
});

test('Sorts shops by types of coffee', () => {
  const sortedShops = sortCoffeeShops(10000, shops, 'typesOfCoffee', customerLocation);
  expect(sortedShops[0].name).toBe('Max types of coffee');
  expect(sortedShops[sortedShops.length - 1].name).toBe('Min types of coffee');
});

test('Sorts shops by distance', () => {
  const sortedShops = sortCoffeeShops(10000, shops, 'distance', customerLocation);
  expect(sortedShops[0].name).toBe('Min distance');
  expect(sortedShops[1].name).toBe('Min rating');
  expect(sortedShops[sortedShops.length - 2].name).toBe('2nd farthest');
  expect(sortedShops[sortedShops.length - 1].name).toBe('Max distance');
});

test('It returns a list of coffee shops that will fit onto the screen', () => {
  const sortByRating = sortCoffeeShops(250, shops, 'rating', customerLocation);
  expect(sortByRating.length).toBe(5);

  const sortByTypes = sortCoffeeShops(500, shops, 'typesOfCoffee', customerLocation);
  expect(sortByTypes.length).toBe(10);

  const sortByDistance = sortCoffeeShops(1000, shops, 'distance', customerLocation);
  expect(sortByDistance.length).toBe(16);
});