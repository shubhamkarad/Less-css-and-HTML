const items = [
  { name: "Box", price: 120 },
  { name: "Phone", price: 1200 },
  { name: "Computer", price: 3500 },
  { name: "Mouse", price: 500 },
  { name: "Car", price: 5000 },
  { name: "Pen", price: 50 },
];

//filter method : It filters our array and create new array without replacing the original array.
const filterdItems = items.filter((item) => {
  return item.price <= 1200;
});
console.log(filterdItems);
console.log(items);

// map method :  It map our array elements the way we want. we can perform any operation on our array using map method.
const mapItems = items.map((item) => {
  return item.name;
});
console.log(mapItems);

// find method :  this method find the specified elements from our array.
const foundItem = items.find((item) => {
  return item.name === "Computer";
});
console.log(foundItem);

// forEach method will provide us list of items or list of elements from our array.
items.forEach((item) => {
  console.log(item.name);
});

// some method : this method will return some true or false if given condition is satisfied.
const hasExpensiveItems = items.some((item) => {
  return item.price > 10000;
});
console.log(hasExpensiveItems);

// reduce method : this method is use to calculate the total price of our items
const totalPrice = items.reduce((currentTotal, item) => {
  return currentTotal + item.price;
}, 0);
console.log(totalPrice);

//slice method : It will Create a copy of our array with given condition
const arraySlice = items.slice(0, 2);
console.log("Slice Method", arraySlice);

// includes : It will return true or false if that element is not in the array
const array1 = [1, 2, 3, 4, 5, 6];
const includesNumber = array1.includes(2);
console.log(includesNumber);
