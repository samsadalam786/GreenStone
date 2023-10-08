const studentDetails = [
    { name: "Rahim1", Age: 75, email: "samsad2131@gmail.com", persentTime: "10:00 PM" },
    { name: "Rahim2", Age: 89, email: "Abhishek5131@gmail.com", persentTime: "12:00 PM" },
    { name: "Rahim3", Age: 98, email: "Ramu4131@gmail.com", persentTime: "10:00 PM" },
    { name: "Rahim4", Age: 56, email: "Rahim3131@gmail.com", persentTime: "11:00 PM" },
    { name: "Rahim5", Age: 67, email: "Ramesh1131@gmail.com", persentTime: "10:00 PM" },

]

const Details = studentDetails.map(studentDetails => {
    return {
        
        Details: studentDetails.name, Age: studentDetails.Age, birthYear: 2023 - studentDetails.Age, email: studentDetails.email,

    }

})
console.log(Details);