function btnSignup(){
let userName = document.getElementById("name").value;
let userEmail = document.getElementById("email").value;
let userPsw = document.getElementById("psw").value;
let userConfirmpsw = document.getElementById("conpsw").value

console.log(userName + userEmail + userPsw + userConfirmpsw);

let userData = {
Your_Name: userName,
Your_Email_id: userEmail,
Your_psw: userPsw,
Your_Confirmpsw: userConfirmpsw,
};

console.log(userData);
let convertedUserData = JSON.stringify(userData);
localStorage.setItem('usersignup',convertedUserData);
location.href = './homepage.html';



}