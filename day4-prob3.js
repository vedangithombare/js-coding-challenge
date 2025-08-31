/*You are given an array of students.
Each student has:

id (number)

name (string)

marks (array of numbers representing scores in subjects)

👉 Task:
Find the top student based on their average marks.
Return the student’s name.*/

function getTopStudent(arr) {
  let maxAvg = -Infinity;
  let sum = 0;
  let studentAvg = 0;
  let topStudent;
  for (let i = 0; i < arr.length; i++) {
    let marks = arr[i].marks;
    for (let j = 0; j < marks.length; j++) {
      sum += marks[j];
    }
    studentAvg = sum / marks.length;
    if (studentAvg > maxAvg) {
      maxAvg = studentAvg;
      topStudent = arr[i].name;
    }
    sum = 0;
  }
  return topStudent;
}
console.log(
  getTopStudent([
    { id: 1, name: "Alice", marks: [90, 85, 92] }, // avg = 89
    { id: 2, name: "Bob", marks: [75, 80, 72] }, // avg = 75.6
    { id: 3, name: "Charlie", marks: [88, 90, 95] }, // avg = 91
  ])
);
