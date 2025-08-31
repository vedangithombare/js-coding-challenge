/*You are given an array of orders.
Each order has:
id (number)
customer (string)
items (array of objects, where each item has name (string), price (number), quantity (number))
status ("delivered" or "pending")

👉 Task:
For each customer, calculate their total amount spent across all delivered orders.
if status is delivered  calculate the total amount

*/

function totalAmountSpend(arr) {
  let amountSpend = {};
  for (let i = 0; i < arr.length; i++) {
    let customer = arr[i].customer;
    if (!amountSpend.hasOwnProperty(customer)) {
      amountSpend[customer] = 0;
    }
    if (arr[i].status === "delivered") {
      let items = arr[i].items;
      for (let j = 0; j < items.length; j++) {
        let totalAmount = items[j].price * items[j].quantity;
        amountSpend[customer] += totalAmount;
      }
    }
  }
  return amountSpend;
}
console.log(
  totalAmountSpend([
    {
      id: 1,
      customer: "Alice",
      items: [
        { name: "Laptop", price: 1000, quantity: 1 },
        { name: "Mouse", price: 50, quantity: 2 },
      ],
      status: "delivered",
    },
    {
      id: 2,
      customer: "Bob",
      items: [{ name: "Phone", price: 500, quantity: 1 }],
      status: "pending",
    },
    {
      id: 3,
      customer: "Alice",
      items: [{ name: "Keyboard", price: 100, quantity: 1 }],
      status: "delivered",
    },
  ])
);
