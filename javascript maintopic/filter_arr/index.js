const numbers=[23,43,-43,-54]
// const positiveNumbers=numbers.filter(number=>{
//     return{
//         number>=0
//     }
// })

// console.log(positiveNumbers);

// const values =positiveNumbers.map(number=>{
//     return{
//         number:number,square:number*number
//     }
// })
// console.log(values);


const positiveNumbers=numbers.filter(number=>number>=0).map(number=>({
    number:number,squre:number*number
}))
console.log(positiveNumbers);