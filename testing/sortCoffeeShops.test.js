const calculateDistance = require('../helperFunctions/calculateDistance');
const generateShops = require('../helperFunctions/generateShops');
const sortCoffeeShops = require('../sortCoffeeShops');
const shops = require('./sampleShops');

const customerLocation = [1, 1];

test('Sorts shops by rating', () => {
  const sortedShops = sortCoffeeShops(10000, shops, 'rating', customerLocation);
  expect(sortedShops[0].name).toBe('Max Rating');
  expect(sortedShops[sortedShops.length - 1].name).toBe('Min rating');

  const sortedShopsAsc = sortCoffeeShops(10000, shops, 'rating', customerLocation, true);
  expect(sortedShopsAsc[0].name).toBe('Min rating');
  expect(sortedShopsAsc[sortedShopsAsc.length - 1].name).toBe('Max Rating');
});

test('Sorts shops by types of coffee', () => {
  const sortedShops = sortCoffeeShops(10000, shops, 'typesOfCoffee', customerLocation);
  expect(sortedShops[0].name).toBe('Max types of coffee');
  expect(sortedShops[sortedShops.length - 1].name).toBe('Min types of coffee');

  const sortedShopsAsc = sortCoffeeShops(10000, shops, 'typesOfCoffee', customerLocation, true);
  expect(sortedShopsAsc[0].name).toBe('Min types of coffee');
  expect(sortedShopsAsc[sortedShopsAsc.length - 1].name).toBe('Max types of coffee');
});

test('Sorts shops by distance', () => {
  const sortedShops = sortCoffeeShops(10000, shops, 'location', customerLocation, true);
  expect(sortedShops[0].name).toBe('Min distance');
  expect(sortedShops[1].name).toBe('Min rating');
  expect(sortedShops[sortedShops.length - 2].name).toBe('2nd farthest');
  expect(sortedShops[sortedShops.length - 1].name).toBe('Max distance');

  const sortedShopsDesc = sortCoffeeShops(10000, shops, 'location', customerLocation);
  expect(sortedShopsDesc[0].name).toBe('Max distance');
  expect(sortedShopsDesc[1].name).toBe('2nd farthest');
  expect(sortedShopsDesc[sortedShopsDesc.length - 2].name).toBe('Min rating');
  expect(sortedShopsDesc[sortedShopsDesc.length - 1].name).toBe('Min distance');
});

test('It returns a list of coffee shops that will fit onto the screen', () => {
  const sortByRating = sortCoffeeShops(250, shops, 'rating', customerLocation);
  expect(sortByRating.length).toBe(5);

  const sortByTypes = sortCoffeeShops(500, shops, 'typesOfCoffee', customerLocation);
  expect(sortByTypes.length).toBe(10);

  const sortByDistance = sortCoffeeShops(1000, shops, 'distance', customerLocation);
  expect(sortByDistance.length).toBe(16);
});

test('It sorts by name', () => {
  const sortByName = sortCoffeeShops(1000, shops, 'name', customerLocation, true);
  expect(sortByName[0].name).toBe('2nd farthest');
  expect(sortByName[1].name).toBe('Dach - Harber Coffee Shop');
  expect(sortByName[sortByName.length - 2].name).toBe('VonRueden - Krajcik Coffee Shop');
  expect(sortByName[sortByName.length - 1].name).toBe('Ward and Sons Coffee Shop');

  const sortByNameDesc = sortCoffeeShops(1000, shops, 'name', customerLocation);
  expect(sortByNameDesc[0].name).toBe('Ward and Sons Coffee Shop');
  expect(sortByNameDesc[1].name).toBe('VonRueden - Krajcik Coffee Shop');
  expect(sortByNameDesc[sortByNameDesc.length - 2].name).toBe('Dach - Harber Coffee Shop');
  expect(sortByNameDesc[sortByNameDesc.length - 1].name).toBe('2nd farthest');
});