// //  ----JavaScript Array some()
// const numbers = [45, 4, 9, 16, 25];
// let someOver18 = numbers.some(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// console.log(someOver18);

// it will check for some member element,
// not for complete array element.

//------- JavaScript Array indexOf()

// const fruits = ['Apple', 'Orange', 'Apple', 'Mango'];
// let elementPosition = fruits.indexOf('Orange') + 1;

// console.log(elementPosition + ' --' + fruits[elementPosition]);

// ------array.indexOf(item, start)

// const fruits = ['Apple', 'Orange', 'Apple', 'Mango'];
// let elementPosition = fruits.indexOf('Orange', 1);

// console.log(elementPosition + ' --' + fruits[elementPosition]);

// // if (elementPosition == -1) {
// //   console.log('Sorry No data available');
// // } else {
// //   console.log('we got data');
// // }

// -----JavaScript Array lastIndexOf()
// const fruits = ['Apple', 'Orange', 'Apple', 'Mango'];
// let position = fruits.lastIndexOf('Apple') + 1;

// console.log(position);

// console.log(fruits[fruits.length - 1]);

// ---

// const fruits = [25];

// if (fruits.length != 0) {
//   console.log('Student Record found');
// } else {
//   console.log('No Record found');
// }