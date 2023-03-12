// let x = 5;
// let x;
// console.log(x);

// if (x != 2) {
//   console.log('hello');
// }

// if (x == undefined) {
//   console.log('hello');
// }

// if (x == null) {
//   console.log('hello');
// }

// let todayDays = 'sunday';
// if (true) {
//   console.log('Today is holiday');
// }

// let todayDays = 'sunday';
// if (false) {
//   console.log('Today is holiday');
// }

// let todayDays = 'sunday';
// let string = 'sunday';

// //   sunday      sunday
// if (todayDays == string) {
//   console.log('Today is holiday');
// }

// let todayDays = 'monday';

// //   sunday      sunday
// if (todayDays == 'sunday') {
//   console.log('Today is holiday');
// }

// -----------------------------------
// let rollNo = '25';

// if (rollNo == 25) {
//   console.log(`My roll No is ${rollNo}`);
// }

// --------------------------------------------
// let rollNo = 5;

// if (rollNo === 25) {
//   console.log(`My roll No is ${rollNo}`);
// }

// let days = ['sun','mon','tue','wed','thru','fri','sat']
// if sunday --->today is leave

// -------wrong-----
// if(days[1] == 'mon'){
//   console.log('today is leave');
// }

// -------- wrong-------
// if(days == [0]){
//   console.log('today is leave');
// }

//------------ array looping
// let days = ['sun', 'mon', 'tue', 'wed', 'thru', 'fri', 'sat'];

// days.forEach((res) => {
//   if (res == 'sun') {
//     console.log(`today is ${res},so it is leave`);
//   }
// });



// =======================ther are two days one time live=============================




// let days = ['sun', 'mon', 'tue', 'wed', 'thru', 'fri', 'sat'];


// days.forEach((res) => {
//   if (res == 'sat' || res == 'sun') {
//     console.log(`today is ${res},so it is leave`);
//   }
// });

//===================== Print days except sunday===============================

// let days = ['sun', 'mon', 'tue', 'wed', 'thru', 'fri', 'sat'];

// days.forEach((res) => {

//   //  sun !== 'sun'   - F
//   //  mon  !== 'sun'  - T

//   if (res !== 'sun') {
//     console.log(`today is ${res},so it is leave`);
//   }
// });

//--------- if else using innerText

// let user = 'Admin';

// if (user !== 'Admin') {
//   document.getElementById('user').innerText = 'Hello Admin';
// } else {
//   document.getElementById('user').innerText = 'Hello User';
// }

//--------- if else using innerHTML

// let user = 'Admin';

// if (user !== 'Admin') {
//   document.getElementById('user').innerHTML = `<h1>Hello ${user}</h1>`;
// } else {
//   document.getElementById('user').innerHTML = `<h1>You have No access.because You are not ${user}</h1>`;
// }

// if else with foreach-->it will print all value due to loop.
// both condition getting true on each simultaneously loop

// let days = ['sun', 'mon', 'tue', 'wed', 'thru', 'fri', 'sat'];

// days.forEach((res) => {
// if (res == 'sun') {
//   console.log(`today is ${res},So working Days`);
// } else {
//   console.log(`today is ${res},So enjoy weekend`);
// }
// });

// console.log(days);
// if (res !== 'sun') {
//   console.log(`today is ${res},So working Days`);
// } else {
//   console.log(`today is ${res},So enjoy weekend`);
// }

// good morning
// let time = 7;

// 6  - 12 --morning
// 12 --3 -- afternoon
// 3 -- 9  --evening

if (time == 7) {
  console.log('Good Morninig');
} else if (time == 12) {
  console.log('Good AfterNoon');
} else if (time == 19) {
  console.log('Good evening');
} else {
  console.log('Good Day');
}
