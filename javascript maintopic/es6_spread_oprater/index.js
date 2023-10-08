// const arr=[3,4,5,6,7]
// console.log(arr);
// console.log(...arr);

// const add=(x,y)=>{return x+y}
// const params=[4,5]
// console.log(add(...params));


// const arr1=[2,3,4,5]
// const arr2=[...arr1,4,5,6]
// console.log(arr2);

// const arr=[3,4,5,6]
// const arr2=[2,34,56,78,]
// const arr3=[4,5,6,7,8]
// const arr4=[...arr,...arr2,...arr3]
// console.log(arr4);


const person ={
    name:"samsad",
    age:34
}
const newPerson={...person,name:"rajesh kumar",address:"india"}
console.log(newPerson);