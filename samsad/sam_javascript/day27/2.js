let text = '';
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = 'Today is before January 14, 2100.';
} else {
  text = 'Today is after January 14, 2100.';
}



document.getElementById("demo").innerHTML = text;


// important question on date method
// 1 how to get date---> new Date()
// 2 how to get month/day/date/hr/minute/sec
// 3 type of date method ---> object
// 4 how to convert Date()  into string ---> tostring()
// 5 how to convert time into UTC---> .toUTCString()
// 6 how to convert one time zone to another----> 
