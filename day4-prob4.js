/*You are given an array of employees.
Each employee has:

id (number)
name (string)
department (string)
salary (number)

👉 Task:
Find the department with the highest total salary expense (sum of salaries of employees in that department).
Return the department name.*/

function expensiveDepartment(arr) {
  let maxSalary = -Infinity;
  let totalSal = {};
  let topDepartment;

  for (let i = 0; i < arr.length; i++) {
    if (!totalSal.hasOwnProperty(arr[i].department)) {
      totalSal[arr[i].department] = 0;
    }
    totalSal[arr[i].department] += arr[i].salary;
    if (totalSal[arr[i].department] > maxSalary) {
      maxSalary = totalSal[arr[i].department];
      topDepartment = arr[i].department;
    }
  }
  console.log(totalSal);

  return topDepartment;
}

console.log(
  expensiveDepartment([
    { id: 1, name: "Alice", department: "HR", salary: 5000 },
    { id: 2, name: "Bob", department: "Engineering", salary: 8000 },
    { id: 3, name: "Charlie", department: "Engineering", salary: 7000 },
    { id: 4, name: "David", department: "HR", salary: 6000 },
    { id: 5, name: "Eve", department: "Sales", salary: 9000 },
  ])
);
