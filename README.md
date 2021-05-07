# Coffee Shop Sorting

`sortCoffeShops(screenSize, coffeeShops, propertyToSortBy, customerLocation)`

Given a list of coffee shops, the customer's current location, a property to sort by, and the customer's screen size return a list of coffee shops sorted in descending order (ascending if sorting by 'distance') by the input property to sort by.

```
screenSize: String;

Interface coffeeShops = CoffeeShop[];

Interface CoffeeShop = {
  name: String,
  location: [lat, long],
  rating: Number,
  typesOfCoffee: Number,
  picture: String,
};

propertyToSortBy: String;

customerLocation: [Latitude: Number, Longitude: Number];

Supported properties to sort by: 'rating', 'typesOfCoffee', 'distance'.
```