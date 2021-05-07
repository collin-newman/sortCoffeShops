# Coffee Shop Sorting

`sortCoffeShops(screenSize, coffeeShops, propertyToSortBy, customerLocation, ascending? = false)`

Given a list of coffee shops, the customer's current location, a property to sort by, and the customer's screen size return a list of coffee shops sorted in ascending or descending order by the input property to sort by.

Assumptions made:
1. Each item in the returned list will take up 50 pixels (content and margin) of screen space.
2. The view port we will be rendering this list on takes up the entire input screen size.

```typescript
var screenSize: string;

type locationInterface = [number, number];

interface CoffeeShop {
  name: String;
  location: locationInterface;
  rating: Number;
  typesOfCoffee: Number;
  picture: String;
};

var coffeeShops = CoffeeShop[];

var propertyToSortBy: string;

var customerLocation: locationInterface;

var ascending: boolean;
```

Supported properties to sort by: 'rating', 'typesOfCoffee', 'distance', 'name'.
