const pwd = document.getElementById('pwd');
const cpwd = document.getElementById('cpwd');
const PassAlert = document.getElementById('alertPassword');


const matchPassword = () => {
    let pwd1 = pwd.value;
    let pwd2 = cpwd.value;
    if(pwd1 === pwd2) {
        PassAlert.style.color = '#8CC63E';
        PassAlert.innerHTML = '<span>Match !</span>'
        cpwd.setCustomValidity('');
    } else {
        PassAlert.style.color = '#EE2B39';
        PassAlert.innerHTML = '<span>Not matching</span>'
        cpwd.setCustomValidity('Password does not match.');
    }
}
