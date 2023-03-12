// --------JavaScript Array map()------

// The map() method creates a new array by performing a function on each array element.

//---without call back, using function name

const numbers1 = [45, 4, 9, 16, 25];

let newNumber = numbers1.map(transArray);

console.log(newNumber);
// newNumber.sort() ----> wrong

newNumber.sort((a, b) => {
  return a - b;
});


console.log(newNumber);

function transArray(value, index, array) {
  return value * 2;
}

//----- with the help of call back
// const numbers1 = [45, 4, 9, 16, 25];

// let newNumber = numbers1.map((res) => {
//   console.log(res * 2);
// });

// transArray----function name
// transArray()----function call
