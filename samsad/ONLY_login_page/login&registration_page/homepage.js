function getData() {
  let userGetData = localStorage.getItem('userlogin');
  let convertedValue = JSON.parse(userGetData);

  let userEmail = convertedValue.emailId;
  let userPwd = convertedValue.password;

  document.getElementById('userName').innerHTML = userEmail;

  document.getElementById('email').innerHTML = userEmail;
  document.getElementById('password').innerHTML = userPwd;

}

getData();

function logout() {
  localStorage.clear();
  location.href = './login_page.html';
}
