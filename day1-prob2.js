/*array-->object
object[key]--> name
object[value]-->score
*/

function GetObject(arr) {
  let student = {};

  for (let i = 0; i < arr.length; i++) {
    student[arr[i].name] = arr[i].score;
  }

  return student;
}
console.log(
  GetObject([
    { name: "Alice", score: 85 },
    { name: "Bob", score: 90 },
    { name: "Charlie", score: 78 },
  ])
);
