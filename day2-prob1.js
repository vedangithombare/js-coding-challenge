function GetQuantities(arr) {
  // first iterate -->get items--> again iterate --> set the key , see if it exits and then increment
  let qunt = {};
  for (let i = 0; i < arr.length; i++) {
    let itemsList = arr[i].items;

    for (let j = 0; j < itemsList.length; j++) {
      if (!qunt.hasOwnProperty(itemsList[j].name)) {
        qunt[itemsList[j].name] = 0;
      }
      qunt[itemsList[j].name] = qunt[itemsList[j].name] + itemsList[j].qty;
    }
  }
  return qunt;
}
console.log(
  GetQuantities([
    {
      orderId: 1,
      customer: "Alice",
      items: [
        { name: "Apple", qty: 2 },
        { name: "Banana", qty: 3 },
      ],
    },
    { orderId: 2, customer: "Bob", items: [{ name: "Apple", qty: 1 }] },
    {
      orderId: 3,
      customer: "Alice",
      items: [
        { name: "Banana", qty: 2 },
        { name: "Orange", qty: 4 },
      ],
    },
  ])
);
