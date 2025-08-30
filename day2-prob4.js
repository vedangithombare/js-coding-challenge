/*Day 2 – Problem 4:

You are given an array of customers and their orders. Each order has items with name, qty, and price.

👉 Task:
Find the overall total amount spent per item across all customers.

So instead of per-customer totals (which you just did in Q3), now you need to aggregate per item.*/

function GetTotalFruits(arr) {
  let totalFruits = {};
  for (let i = 0; i < arr.length; i++) {
    let items = arr[i].items;
    for (let j = 0; j < items.length; j++) {
      let fruitName = items[j].name;
      let totalPrice = items[j].price * items[j].qty;
      if (!totalFruits.hasOwnProperty(fruitName)) {
        totalFruits[fruitName] = 0;
      }
      totalFruits[fruitName] = totalFruits[fruitName] + totalPrice;
    }
  }

  return totalFruits;
}
console.log(
  GetTotalFruits([
    {
      customer: "Alice",
      items: [
        { name: "Apple", qty: 2, price: 10 },
        { name: "Banana", qty: 3, price: 5 },
      ],
    },
    {
      customer: "Bob",
      items: [
        { name: "Apple", qty: 1, price: 10 },
        { name: "Orange", qty: 4, price: 8 },
      ],
    },
  ])
);
