document.getElementById('submit-btn').addEventListener('click', function(){
const getEmail = document.getElementById('user-email-input');
const getEmailValue = getEmail.value;
const getPassword = document.getElementById('user-password-input');
const getPasswordValue = getPassword.value;
if(getEmailValue === 'ss' && getPasswordValue === `11`){
    window.location.href = "bank.html";
}else{
    alert('Invalid password');
}
})