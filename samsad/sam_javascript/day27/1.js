// const d = Date();
// console.log(d);

// ----create date=====

// let dateValue = new Date();
// console.log(dateValue);
// document.getElementById('demo').innerHTML = dateValue;

// let dateValue = new Date(2015, 11, 24, 10, 33, 30, 2);
// console.log(dateValue);

let dateValue = new Date();
// console.log(typeof dateValue);
// console.log(typeof ('' + dateValue));
// console.log(typeof dateValue.toString());
// console.log('IST',dateValue);
// console.log('UTC',dateValue.toUTCString());
console.log('to date', dateValue.getFullYear());
console.log('to date', dateValue.getMonth());
console.log('to date', dateValue.getTime());
console.log('to date', dateValue.getDay());

console.log('to hour', dateValue.getHours());
console.log('to date', dateValue.is);

if (dateValue.getMinutes() == 48) {
  alert('hello');
}
console.log('to date', dateValue.getSeconds());



// show timer on UI


function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = 'AM';

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = 'PM';
  }

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  var time = h + ':' + m + ':' + s + ' ' + session;
  document.getElementById('MyClockDisplay').innerText = time;

  if (h >= 07 && m >= 54) {
    // add test time here
    document.getElementById('onlineTest').innerHTML = 'start test';
    document.getElementById('onlineTest').style.backgroundColor = 'green';
    document.getElementById('onlineTest').style.color = 'floralwhite';
    document.getElementById('onlineTest').style.pointerEvents = 'auto';
  }

  setTimeout(showTime, 1000);
}

showTime();
