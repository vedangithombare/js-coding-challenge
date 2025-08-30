/*Day 3 – Problem 2

You are given an array of transactions.
Each transaction has:

id (number)

customer (string)

amount (number)

status ("success" or "failed")

date (string, e.g., "2025-08-01")

👉 Task:
For each day, calculate the total successful transaction amount (irrespective of customer).

first check status --> check if date already exits --> if it does just add the amount -->if not initialse it with 0

solved in :8 mins
big o notation
edge cases
add comments

i can make it script

*/

function CalculateTransactions(arr) {
  let successAmount = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].status === "success") {
      if (!successAmount.hasOwnProperty(arr[i].date)) {
        successAmount[arr[i].date] = 0;
      }
      successAmount[arr[i].date] = successAmount[arr[i].date] + arr[i].amount;
    }
  }
  return successAmount;
}
console.log(
  CalculateTransactions([
    {
      id: 1,
      customer: "Alice",
      amount: 300,
      status: "success",
      date: "2025-08-01",
    },
    {
      id: 2,
      customer: "Bob",
      amount: 400,
      status: "failed",
      date: "2025-08-01",
    },
    {
      id: 3,
      customer: "Alice",
      amount: 200,
      status: "success",
      date: "2025-08-02",
    },
    {
      id: 4,
      customer: "Bob",
      amount: 500,
      status: "success",
      date: "2025-08-02",
    },
    {
      id: 5,
      customer: "Charlie",
      amount: 100,
      status: "failed",
      date: "2025-08-03",
    },
  ])
);
