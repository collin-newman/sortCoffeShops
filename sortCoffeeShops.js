const generateShops = require('./helperFunctions/generateShops');
const getCurrentLocation = require('./helperFunctions/getCurrentLocation');
const calculateDistance = require('./helperFunctions/calculateDistance');

const shops = generateShops(20);
const customerLocation = getCurrentLocation();


module.exports = sortCoffeeShops = (screenSize, coffeeShops, property, customerLocation) => {
  const arraySize = Math.floor(screenSize / 50);
  let sortedShops = coffeeShops.sort((a, b) => {
    if (property === 'distance') {
      const shop1Distance = calculateDistance(a['location'][0], a['location'][1], customerLocation[0], customerLocation[1]);
      const shop2Distance = calculateDistance(b['location'][0], b['location'][1], customerLocation[0], customerLocation[1]);
      if (shop1Distance < shop2Distance) { return -1; }
      if (shop1Distance > shop2Distance) { return 1; }
      return 0;
    }
    if (a[property] < b[property]) { return 1; }
    if (a[property] > b[property]) { return -1; }
    return 0;
  });

  return sortedShops.slice(0, arraySize);
};