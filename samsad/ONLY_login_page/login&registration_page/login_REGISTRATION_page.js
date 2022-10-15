function btnRegister() {
    let userFirstname = document.getElementById("Firstname").value;
    let usermiddlename = document.getElementById("middlename").value;
    let userlastname = document.getElementById("lastname").value;
    let userQualification = document.getElementById("Qualification").value;
    let userGender = document.getElementById("Gender").value;
    // let userFemale = document.getElementById("fsex").value
    // let userMale = document.getElementById("msex").value
    // let userOther = document.getElementById("Other").value


    let usercountrycode = document.getElementById("countrycode").value;
    let userphone = document.getElementById("phone").value;
    let userCurrentAddress = document.getElementById("CurrentAddress").value;
    let userEmail = document.getElementById("Email").value;
    let userPassword = document.getElementById("Password").value;
    let userRetypePassword = document.getElementById("RetypePassword").value;

    console.log(userFirstname + usermiddlename + userlastname + userQualification + usercountrycode + userGender 
       + userphone + userCurrentAddress + userEmail + userPassword + userRetypePassword);




        
   
    let userData = {
        Your_Firstname: userFirstname,
        Your_middlename: usermiddlename,
        Your_lastname: userlastname,
        Your_Qualification: userQualification,
        // Your_Male: Male,
        // Your_Female:Female,
        // You_are_Other:Other,
        Your_countrycode: usercountrycode,
        Your_phone: userphone,
        Your_CurrentAddress: userCurrentAddress,
        Your_id_Email: userEmail,
        Your_Password: userPassword,
        Your_RetypePassword: userRetypePassword,


        
    };
    console.log(userData);
    let convertedUserData = JSON.stringify(userData);
    localStorage.setItem('userregiste',convertedUserData)
    location.href = './homepage.html';
  
}

