/*📌 Problem Statement
You are given an array of products.
Each product has:

id (number)

name (string)

category (string)

price (number)

stock (number)

👉 Task:
Find the category with the highest total stock value.

Stock value of a product = price × stock.

Return the category name.

// iterate -->calculate the stock value -->compare the value
*/

function highestStockValue(arr) {
  let stockVal = {};
  let maxStockVal = Number.MIN_VALUE;
  let highestStock;
  for (let i = 0; i < arr.length; i++) {
    if (!stockVal.hasOwnProperty(arr[i].category)) {
      stockVal[arr[i].category] = 0;
    }
    let stockPrice = arr[i].price * arr[i].stock;
    stockVal[arr[i].category] += stockPrice;

    if (stockVal[arr[i].category] > maxStockVal) {
      maxStockVal = stockVal[arr[i].category];
      highestStock = arr[i].category;
    }
  }
  return highestStock;
}
console.log(
  highestStockValue([
    { id: 1, name: "Laptop", category: "Electronics", price: 1000, stock: 5 },
    { id: 2, name: "Phone", category: "Electronics", price: 500, stock: 10 },
    { id: 3, name: "Shirt", category: "Clothing", price: 50, stock: 20 },
    { id: 4, name: "Jeans", category: "Clothing", price: 100, stock: 15 },
    { id: 5, name: "Sofa", category: "Furniture", price: 2000, stock: 2 },
  ])
);
