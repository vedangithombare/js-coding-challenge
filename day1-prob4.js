function GetRoleCount(arr) {
  let roles = {};

  for (let i = 0; i < arr.length; i++) {
    if (!Object.keys(roles).includes(arr[i].role)) {
      roles[arr[i].role] = 0;
    }
    roles[arr[i].role] = roles[arr[i].role] + 1;
  }
  return roles;
}
console.log(
  GetRoleCount([
    { name: "Alice", role: "Developer" },
    { name: "Bob", role: "Designer" },
    { name: "Charlie", role: "Developer" },
    { name: "David", role: "Manager" },
    { name: "Eve", role: "Developer" },
  ])
);
