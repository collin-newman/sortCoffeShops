const faker = require('faker');

module.exports = getCurrentLocation = () => (
  [Number(faker.address.latitude()), Number(faker.address.longitude())]
);