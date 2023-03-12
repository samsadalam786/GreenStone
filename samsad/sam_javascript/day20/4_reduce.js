// -------JavaScript Array reduce()----

// The reduce() method runs a function on
// each array element to produce (reduce it to)
// a single value.

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);
console.log(sum);

function myFunction(addition, value, index, arrayValue) {
  return addition + value;
  // return addition - value;
  //   return addition * value;
}

// addition + value
// 45       +    4      =  49
// 49       +    9     = 58
// 58       +    16   = 74
// 74       +    25    =   99
