// ----for loop in array with condition
// let arrData = [12, 52, 45, 65, 45];

// let arrData1 = [
//   { day: 'sun', date: Date() },
//   { day: 'mon', date: Date() },
//   { day: 'tues', date: Date() },
//   { name: 'mohan', date: Date() },
// ];
// for (let i = 0; i < arrData.length; i++) {
//   console.log(arrData1[i].day);
//   console.log(arrData[i].name);
//   console.log(arrData1[i].date);
// }

// // ----for of-----
// let marks = [12, 52, 45, 65, 45];

// for (let x of marks) {
//   console.log('for of--->', x); // value
// }

// //-------- for in-------
// for (let x in marks) {
//   console.log('for in -->', x); // index
// }

// for (let x = 0; x < marks.length; x++) {
//   console.log(`for--->${x} and value is ${marks[x]}`); // value
// }

// --foreach---------------------
// marks.forEach((x) => {
//   console.log(x);
// });

// let dateValues = new Date();
// let dateValue = dateValues.getDate();

//-------------- array is collection of different different datatype----------
// let arrData = [
//   { day: 'sun', date: dateValue, rollno: 25 },

//   { day: 'mon', date: dateValue },
//   { day: 'tues', date: dateValue },
//   { name: 'mohan', date: dateValue },

//   // 12, 45, 2, 6, 8, 7,

//   // 'ramu',
//   // 'mohan',
//   // 'shyam',
// ];

// for (let x of arrData) {
//   console.log('for of--->', x); // value
// }

// -----itterate the string-------------
// let nameValue = 'ramu';
// let resu = nameValue.split('');
// console.log(resu);

// //-------- for in-------
// for (let x in arrData) {
//   console.log('for in -->', arrData[x]); // index
// }

// multiple object is inside array
// let arrData = [
//   // 21,24,25,36,7
//   { day: 'sun', date: dateValue },
//   { day: 'mon', date: dateValue },
//   { day: 'tues', date: dateValue },
//   { name: 'mohan', date: dateValue },
// ];

// ----object itteration-------

// const person = { fname: 'John', lname: 'Doe', age: 25 };

// let dateValues = new Date();
// let dateValue = dateValues.getDate();

// let person = [
//   { day: 'sun', date: 23 },
//   { day: 'mon', date: 2 },
//   { day: 'tues', date: 5 },
// ];

// for (let x in person) {
//   console.log(person[x].day + ' - ' + person[x].date); //0
// }

// ----------registration validation -------------

let userInput = prompt('enter email').trim();

let resgistratedUser = [
  { emailId: 'a@gmail.com', pwd: '12', mobileNo: '1', dob: '' },
  { emailId: 'b@gmail.com', pwd: '23', mobileNo: '2', dob: '' },
  { emailId: 'c@gmail.com', pwd: '45', mobileNo: '3', dob: '' },
  { emailId: 'd@gmail.com', pwd: '58', mobileNo: '4', dob: '' },
  { emailId: 'e@gmail.com', pwd: '25', mobileNo: '5', dob: '' },
  { emailId: 'f@gmail.com', pwd: '85', mobileNo: '6', dob: '' },
  { emailId: 'g@gmail.com', pwd: '98', mobileNo: '7', dob: '' },
  { emailId: 'h@gmail.com', pwd: '89', mobileNo: '8', dob: '' },
];

for (let userData of resgistratedUser) {
  console.log(userData.emailId);

  if (userInput === userData.emailId) {
    console.log(`${userInput}  valid id and position is`);
  }
}

// get key-------------

const personObj = { fname: 'John', lname: 'Doe', age: 25 }; // object data
const person = ['John', 'doe', 25]; // array data


// --------access data by .key method for
console.log(personObj.fname);
console.log(person[0]);

console.log('-------------------------------');

//----------access data by index process
console.log(personObj['age']); // named index
console.log(person[1]);  //numbered



for (let x in person) {

  console.log(x);
  // console.log(person[x]);
}
