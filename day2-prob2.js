function customerQuantites(arr) {
  /*iterate array --> check if the property customer exits if it not initialse an empty object
    iterate items --> check if items.name is present as the key ,if it is just add the qty to the value of the key
    */

  let customerObj = {};

  for (let i = 0; i < arr.length; i++) {

    let items = arr[i].items;
    let cust = arr[i].customer;

    if (!customerObj.hasOwnProperty(arr[i].customer)) {
      customerObj[cust] = {};
    }
    
    for (let i = 0; i < items.length; i++) {
      let itemName = items[i].name;
      let qty = items[i].qty;
      if (!customerObj[cust].hasOwnProperty(itemName)) {
        customerObj[cust][itemName] = 0;
      }
      customerObj[cust][itemName] = customerObj[cust][itemName] + qty;
    }
  }

  return customerObj;
}

console.log(
  customerQuantites([
    {
      orderId: 1,
      customer: "Alice",
      items: [
        { name: "Apple", qty: 2 },
        { name: "Banana", qty: 3 },
      ],
    },
    {
      orderId: 2,
      customer: "Bob",
      items: [{ name: "Apple", qty: 1 }],
    },
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
