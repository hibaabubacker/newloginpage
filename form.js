const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const phoneNumber = document.getElementById('phoneNumber');
const form = document.getElementById('form');

const userName_error = document.getElementById('username_error');
const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');
const confirmPassword_error = document.getElementById('confirmPassword_error');
const phoneNumber_error = document.getElementById('phoneNumber_error');

form.addEventListener('submit', (e) => {

    var email_check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var number_check = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var password_check = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

    
    if (username.value.length <= 5) {
        e.preventDefault();
        userName_error.innerHTML = "Name is required and should be more than 5 characters";
    } else {
        userName_error.innerHTML = '';
    }


    if (!email.value.match(email_check)) {
        e.preventDefault();
        email_error.innerHTML = "Valid email is required";
    } else {
        email_error.innerHTML = '';
    }

    
    if (password.value.length <= 9) {
        e.preventDefault();
        password_error.innerHTML = "Password must be at least 9 characters long";
    } else if (!password.value.match(password_check)) {
        e.preventDefault();
        password_error.innerHTML = "Password must include uppercase, lowercase, number, and special character";
    } else {
        password_error.innerHTML = '';
    }

    
    if (confirmPassword.value !== password.value) {
        e.preventDefault();
        confirmPassword_error.innerHTML = 'Passwords do not match';
    } else {
        confirmPassword_error.innerHTML = '';
    }


    if(!phoneNumber.value.match(number_check)){
        e.preventDefault();
       phoneNumber_error.innerHTML = 'Passwords do not match'; 
    }
});