function btnLogin() {
  let userEmail = document.getElementById('username').value;
  let userPwd = document.getElementById('password').value;
  let userData = {
    emailId: userEmail,
    password: userPwd,
  };
  let convertedUserData = JSON.stringify(userData);
  localStorage.setItem('userlogin', convertedUserData);
  location.href = './homepage.html';
}

function getData() {
  let userGetData = localStorage.getItem('userlogin');
  let covertedValue = JSON.parse(userGetData);

  console.log(covertedValue);
}

getData();
