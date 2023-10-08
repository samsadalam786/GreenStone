// const numbers = [1, 2, 3, 4, 5,]
// numbers.map((numbers,index,arr)=>{console.log(numbers);})
// numbers.map((numbers,index,arr)=>{console.log(index);})
// numbers.map((numbers,index,arr)=>{console.log(arr);})
// const squreOfNumbers = numbers.map(numbers => numbers * numbers)
// console.log(squreOfNumbers);

// employee
// employee details of company


const persons = [
    { name: "Rahim", age: 75 },
    { name: "Rahim", age: 89 },
    { name: "Rahim", age: 98 },
    { name: "Rahim", age: 56 },
    { name: "Rahim", age: 67 },

]

// empname,age,birthYear,active
const employee =persons.map(person=>{
    return{
        empname:person.name
    }
})
console.log(employee);
// 

// const employee = persons.map(persons => {
//     return {
//         empname: persons.name, age: persons.age, birthYear: 2023 - persons.age, active: persons.age >= 80 ? false : true
//     }
// })
// console.log(employee);

// const employee = persons.map(persons => {
//     return {
//         empname: persons.name, age: persons.age, birthYear: 2023 - persons.age, active: persons.age > 85 ? false : true
//     }
// })
// console.log(employee);


