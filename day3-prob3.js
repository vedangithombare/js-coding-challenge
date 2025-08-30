/*📌 Day 3 – Problem 3

You are given an array of transactions.
Each transaction has:

id (number)

customer (string)

amount (number)

status ("success" or "failed")

date (string, e.g., "2025-08-01")

👉 Task:
For each customer, calculate their total successful transaction amount (across all days).
solved in 8 mins
*/

function TotalTranc(arr) {
  let successfulTranc = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].status === "success") {
      if (!successfulTranc.hasOwnProperty(arr[i].customer)) {
        successfulTranc[arr[i].customer] = 0;
      }
      successfulTranc[arr[i].customer] = successfulTranc[arr[i].customer] + arr[i].amount;
    }
  }
  return successfulTranc;
}

console.log(
  TotalTranc([
    {
      id: 1,
      customer: "Alice",
      amount: 150,
      status: "success",
      date: "2025-08-01",
    },
    {
      id: 2,
      customer: "Bob",
      amount: 250,
      status: "success",
      date: "2025-08-01",
    },
    {
      id: 3,
      customer: "Alice",
      amount: 100,
      status: "failed",
      date: "2025-08-02",
    },
    {
      id: 4,
      customer: "Bob",
      amount: 200,
      status: "success",
      date: "2025-08-02",
    },
    {
      id: 5,
      customer: "Charlie",
      amount: 300,
      status: "success",
      date: "2025-08-03",
    },
  ])
);
