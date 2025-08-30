/*Here’s Day 2 – Problem 3:

👉 You’re given an array of orders. Each order has:

orderId

customer

items (array of { name, qty, price })

You need to return an object that shows the total amount spent by each customer.

Total amount = qty × price for each item, summed across all their orders.*/

function amount(arr) {
  let totalAmount = {};

  for (let i = 0; i < arr.length; i++) {
    let cust = arr[i].customer;
    let items = arr[i].items;
    if (!totalAmount.hasOwnProperty(cust)) {
      totalAmount[cust] = 0;
    }

    for (let j = 0; j < items.length; j++) {
      let price = items[j].price;
      let qty = items[j].qty;
      let totalPrice = price * qty;

      totalAmount[cust] = totalAmount[cust] + totalPrice;
    }
  }

  return totalAmount;
}

console.log(
  amount([
    {
      orderId: 1,
      customer: "Alice",
      items: [
        { name: "Apple", qty: 2, price: 3 },
        { name: "Banana", qty: 3, price: 2 },
      ],
    },
    {
      orderId: 2,
      customer: "Bob",
      items: [{ name: "Apple", qty: 1, price: 3 }],
    },
    {
      orderId: 3,
      customer: "Alice",
      items: [
        { name: "Banana", qty: 2, price: 2 },
        { name: "Orange", qty: 4, price: 5 },
      ],
    },
  ])
);
