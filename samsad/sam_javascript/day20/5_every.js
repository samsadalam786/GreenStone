// JavaScript Array every()

// const numbers = [5, 4, 9, 16, 2];
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  
    // return value < 16;
    return value < 18;
    // return value <= 16;
    // 45 > 18  -- T
    // 4 > 18  -- F
    // 9 > 18 ---> F
    // 16 > 18 --> F
    // 25 > 18---> T
}

console.log(allOver18);


// Result will be true only if 
// all element/member will pass 
// the test otherwise it will return false