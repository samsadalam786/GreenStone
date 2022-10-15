function btnSubmit(){
    let userEmail = document.getElementById("Email1").value;
    let usersetpsw = document.getElementById("setPsw").value;
    let usersetconfpsw = document.getElementById("setconfpsw").value;

    console.log(userEmail + usersetpsw + usersetconfpsw);


    let userData={ 
        Your_Email_ID: userEmail,
        You_set_psw: usersetpsw,
        You_Setconfirm_psw: usersetconfpsw
    };


    console.log(userData);
    let convertedUserData = JSON.stringify(userData)
    localStorage.setItem('usersubmit',convertedUserData)
    location.href = './homepage.html';
    
}