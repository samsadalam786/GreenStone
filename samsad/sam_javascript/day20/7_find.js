// // ------JavaScript Array find()
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// console.log(first);

// The find() method returns the value of
// the first array element that passes a test function.

//  first element that satisfied condition,it will not check next any more:

// JavaScript Array findIndex()
// first array element that passes a test function.

const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

console.log(first);

function myFunction(value, index, array) {
  return value > 18;
}
