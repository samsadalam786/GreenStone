// foreach

let fruits = ['apple', 'banana', 'orange', 'mango'];

// console.log(typeof fruits);

// console.log(Array.isArray(fruits));

fruits.forEach((res, index, array) => {
  console.log(res);
  console.log(index + 1);
//   console.log(array);

  document.getElementById('fruit').innerHTML +=
    '<br>' + (index + 1) + ' ' + res;
});
