const faker = require('faker');

module.exports = generateShops = (numOfShops) => {
  let shops = [];

  for (let i = 0; i < numOfShops; i++) {
    shops.push(
      {
        name: faker.company.companyName() + ' Coffee Shop',
        location: [Number(faker.address.latitude()), Number(faker.address.longitude())],
        rating: Math.floor(Math.random() * 5) + 1,
        picture: faker.image.imageUrl(),
        typesOfCoffee: Math.floor(Math.random() * 10) + 3,
      }
    );
  };
  return shops;
}