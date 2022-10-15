// ----success
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

//---- Uncaught ReferenceError: i is not defined
// for (; i < 5; i++) {
//   console.log(i);
// }

// ----loop wil execute infinite time
// for (let i = 0; ; i++) {
//   console.log(i);
// }

// // loop will execute infinite time,
// but we will get result as i value
// for (let i = 0; i < 56; ) {
//   console.log(i);  // i =0    i<56   0<56
// }

// ----- The While Loop

// while loop
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let text = '';
// let i = 0;

// // 9 < 10  - f
// while (i < 10) {  // i = 0
//  console.log('hello');
//  i++    // 0 1 2   9 10
// }

// -------------loop will execute infinite time
// let text = '';
// let i = 0;

// while (i < 10) {
//   console.log('hello');
//   // i++
// }
// i++;

//----------------while loop---------------------
// let text = '';
// let i = 0;

// while (i < 10) {
//   console.log(i, '1st line'); // 0---9

//   i++; // 9++ =10
//   console.log(i, '2nd line'); // 1 -- 10
// } // 10
// console.log(i, 'outside'); //  10

// --------------The Do While Loop

// -----------infinite time------------
// let i = 0;
// do {
//   console.log('1st line');

// } while (i < 10); // 0 < 10 --> 1 - 11

// ------------------------------------------------
// let i = 10;
// do {
//   console.log(i,'1st line');  // i=11

//   i++;    // 12

// //   console.log(i,'2nd line'); // i = 12

// } while (i < 10);  // 12 < 10

// // console.log(i,'outside'); // i = 12

//----------- compare with while and do while---------

// let i = 10;
// let i = 9;
// let i = 90;

// do {
//   console.log(i,'1st line');

//   i++;

// } while (i < 10);  // 10 < 10   90 < 10

// in case of do while loop will get execute atleast one time
// whether condition is true or false.

// while loop -------------

// let text = '';
// let i = 11;

// while (i < 10) {  // false
//   console.log(i, '1st line');
//   i++;
//   console.log(i, '2nd line');
// }


// console.log('---------');


// Note:- 
// 1 in case of do while loop will get execute atleast one time
// whether condition is true or false.

// 2 when there is requirement to get output atleast one time
// we have to follow do while because condition 
// check is not on the initial stage.

// 3 --> for(i=0;i<10;i++) --->when length value is known.

// 4 -->foreach --> when length value is not known.

// 5 (for in) ---> when we have to iterate object. here we can get index

// 6 (for of) --> when we have to iterate array,object,string.
// here we can get value 


// 7. switch --> when we have to do some operation on each condition.

// 8. if else --> choose either one or another.

// 9 . for looping purpose we can use 
// (for loop,foreach,for in,for of,switch,while,do while)

