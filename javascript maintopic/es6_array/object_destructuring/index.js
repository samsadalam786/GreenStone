const name=["samsad","alam"]
// console.log(name[0],name[1]);


// const firstName=name[0]
// const lastName= name[1]
// console.log(firstName,lastName);

// const [firstName,lastName]=name
// console.log(firstName,lastName);
// const name1=["samsad","alam","age:23","address:india"]
// const[firstName,lastName,...rest]=name1
// console.log(firstName,lastName,...rest);


// object destructuring.......................
const person={firstName:"samsad",lastName:"alam",Age:"34"}
// console.log(person.firstName,person.lastName,person.Age);
const {firstName,lastName,Age}=person
console.log(firstName,lastName,Age);