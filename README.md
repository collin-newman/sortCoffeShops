# Coffee Shop Sorting

`sortCoffeShops(screenSize, coffeeShops, propertyToSortBy, customerLocation, ascending? = false)`

Given a list of coffee shops, the customer's current location, a property to sort by, and the customer's screen size return a list of coffee shops sorted in ascending or descending order by the input property to sort by.

```typescript
var screenSize: string;

interface CoffeeShop {
  name: String;
  location: [lat, long];
  rating: Number;
  typesOfCoffee: Number;
  picture: String;
};

var coffeeShops = CoffeeShop[];

var propertyToSortBy: string;

type locationInterface = [number, number];

var customerLocation: locationInterface;

var ascending: boolean;
```

Supported properties to sort by: 'rating', 'typesOfCoffee', 'distance', 'name'.