/*Day 3 – Problem 1

You are given an array of customers and their orders. Each order has items with name, qty, and price.

👉 Task:
Find the highest spending customer (the one who spent the most in total).

calculate the items and write them in the object and keep the maximum value as the value

// To find the key if we have the value use find , it will return the first key who has that specific value

solved in 17 mins
*/

function FindCust(arr) {
  let maxCust = {};
  let max = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    let cust = arr[i].customer;
    let items = arr[i].items;

    if (!maxCust.hasOwnProperty(cust)) {
      maxCust[cust] = 0;
    }
    for (let j = 0; j < items.length; j++) {
      let totalSpend = items[j].qty * items[j].price;
      maxCust[cust] = maxCust[cust] + totalSpend;
    }
    max = Math.max(max, maxCust[cust]);
  }
  let spender = Object.keys(maxCust).find((key) => maxCust[key] === max);
  return spender;
}

console.log(
  FindCust([
    {
      customer: "Alice",
      items: [
        { name: "Apple", qty: 2, price: 10 }, // 20
        { name: "Banana", qty: 3, price: 5 }, // 15 → Alice = 35
      ],
    },
    {
      customer: "Bob",
      items: [
        { name: "Apple", qty: 1, price: 10 }, // 10
        { name: "Orange", qty: 4, price: 8 }, // 32 → Bob = 42
      ],
    },
  ])
);
