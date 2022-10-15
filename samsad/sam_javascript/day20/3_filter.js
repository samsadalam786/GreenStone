//------------ JavaScript Array filter()

// The filter() method creates a new array
// with array elements that passes a test.

//show number value > 18

//----- with the help of call back

const numbers1 = [45, 4, 9, 16, 25];

let newNumber = numbers1.filter((res) => {
  console.log(res > 18); // boolean value - true  false  true
  return res > 18;
});

console.log(newNumber); // (2) [45, 25]

// ---without call back, using function name
// const numbers1 = [45, 4, 9, 16, 25];

// let newNumber = numbers1.filter(filterTest);

// console.log(newNumber);

// function filterTest(value, index, array) {
//   return value > 18;
// }
