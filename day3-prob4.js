/*Problem Statement

You are given an array of transactions.
Each transaction has:

id (number)

customer (string)

amount (number)

status ("success" or "failed")

date (string, e.g., "2025-08-01")

👉 Task:
Find the customer with the highest total successful transaction amount.
*/

function successTranc(arr) {
  let successTranc = {};
  let max = Number.MIN_SAFE_INTEGER;
  let highestSpender;
  for (let i = 0; i < arr.length; i++) {
    let cust = arr[i].customer;
    if (arr[i].status === "success") {
      if (!successTranc.hasOwnProperty(cust)) {
        successTranc[cust] = 0;
      }
      successTranc[cust] += arr[i].amount;

      // optimised version
      if (successTranc[cust] > max) {
        max = successTranc[cust];
        highestSpender = cust;
      }
      
      // my logic
      // max = Math.max(max, successTranc[cust]);
    }
  }

  // let highestSpender = Object.keys(successTranc).find(
  //   (amount) => successTranc[amount] === max
  // );

  return highestSpender;
}
console.log(
  successTranc([
    {
      id: 1,
      customer: "Alice",
      amount: 200,
      status: "success",
      date: "2025-08-01",
    },
    {
      id: 2,
      customer: "Bob",
      amount: 300,
      status: "failed",
      date: "2025-08-01",
    },
    {
      id: 3,
      customer: "Alice",
      amount: 150,
      status: "success",
      date: "2025-08-02",
    },
    {
      id: 4,
      customer: "Charlie",
      amount: 500,
      status: "success",
      date: "2025-08-02",
    },
    {
      id: 5,
      customer: "Bob",
      amount: 400,
      status: "success",
      date: "2025-08-03",
    },
  ])
);
