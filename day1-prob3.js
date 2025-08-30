function GetStudentScores(arr) {
  let totalScores = {};

  for (let i = 0; i < arr.length; i++) {
    if (!totalScores.hasOwnProperty(arr[i].name)) {
      totalScores[arr[i].name] = 0;
    }
    totalScores[arr[i].name] = totalScores[arr[i].name] + arr[i].score;
  }

  return totalScores;
}
console.log(
  GetStudentScores([
    { name: "Alice", score: 85 },
    { name: "Bob", score: 90 },
    { name: "Alice", score: 15 },
    { name: "Charlie", score: 78 },
    { name: "Bob", score: 10 },
  ])
);
