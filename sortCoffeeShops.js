const calculateDistance = require('./helperFunctions/calculateDistance');

module.exports = sortCoffeeShops = (screenSize, coffeeShops, property, customerLocation, ascending = false) => {
  const arraySize = Math.floor(screenSize / 50);
  let sortedShops = coffeeShops.sort((a, b) => {
    let item1 = a[property];
    let item2 = b[property];
    if (property === 'location') {
      item1 = calculateDistance(a['location'][0], a['location'][1], customerLocation[0], customerLocation[1]);
      item2 = calculateDistance(b['location'][0], b['location'][1], customerLocation[0], customerLocation[1]);
    }

    if (ascending) {
      if (item1 < item2) { return -1; }
      if (item1 > item2) { return 1; }
      return 0;
    }

    // default sorting should be descending
    if (item1 < item2) { return 1; }
    if (item1 > item2) { return -1; }
    return 0;
  });

  return sortedShops.slice(0, arraySize);
};