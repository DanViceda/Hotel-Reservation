const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', function() {
    container.classList.add('active');
});

loginLink.addEventListener('click', function() {
    container.classList.remove('active');
});

const loginForm = document.querySelector('.content.login form');
const loginUsername = document.getElementById('loginusername');
const loginPassword = document.getElementById('loginpassword');
const staySignedInCheckbox = document.getElementById('staySignedIn');
const customAlert = document.getElementById('customAlert');
const alertMessage = document.getElementById('alertMessage');
const closeAlert = document.getElementById('closeAlert');
let redirectAfterLogin = false; // A flag to indicate if redirection is needed

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const enteredUsername = loginUsername.value.trim();
    const enteredPassword = loginPassword.value.trim();

    if (enteredUsername === '' && enteredPassword === '') {
        showAlert('Please enter both username and password.');
        return; // Prevent form submission
    }

    if (enteredUsername === '') {
        showAlert('Please enter username.');
        return; // Prevent form submission
    }

    if (enteredPassword === '') {
        showAlert('Please enter password.');
        return; // Prevent form submission
    }

    // Perform username and password validation (you can replace this with your actual validation logic)
    const validUsername = 'testuser'; // Replace with the correct username
    const validPassword = 'testpass'; // Replace with the correct password

    if (enteredUsername === validUsername && enteredPassword === validPassword) {
        // Successful login
        showAlert('Login Successful!');
        redirectAfterLogin = true; // Set the flag for redirection
    } else {
        // Incorrect username or password
        showAlert('Incorrect username or password. Please try again.');
    }
});

closeAlert.addEventListener('click', function() {
    customAlert.style.display = 'none';

    if (redirectAfterLogin) {
        // Redirect to the home page after the user clicks "OK"
        window.location.href = 'home.html'; // Change 'home.html' to your home page's URL
    }
});

function showAlert(message) {
    alertMessage.textContent = message;
    customAlert.style.display = 'block';
    redirectAfterLogin = false; // Reset the flag
}

const passField = document.getElementById("loginpassword");
const showBtn = document.querySelector(".showpass");
      
showBtn.onclick = (()=>{
    if(passField.type === "password"){
      passField.type = "text";
    }else{
      passField.type = "password";
    }
});

const registerForm = document.getElementById('registerform');
const registerUsername = document.getElementById('registerusername');
const registerEmail = document.getElementById('registeremail');
const registerPassword = document.getElementById('registerpassword');
const registerPassword2 = document.getElementById('registerpassword2');
const termsPrivacyCheckbox = document.getElementById('termsprivacy');
const registrationSuccessModal = document.getElementById('registrationSuccess');
const closeRegistrationSuccess = document.getElementById('closeRegistrationSuccess');
let redirectAfterRegister = false;

registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validateInputs()) {
        return; // Prevent form submission if validation fails
    }

    showAlert('Registration Complete! Your account has been created.');
    redirectAfterRegister = true;

});

closeAlert.addEventListener('click', function() {
    customAlert.style.display = 'none';

    if (redirectAfterRegister) {
        // Redirect to the home page after the user clicks "OK"
        window.location.href = 'home.html'; // Change 'home.html' to your home page's URL
    }
});

function showAlert(message) {
    alertMessage.textContent = message;
    customAlert.style.display = 'block';
    redirectAfterRegister = false; // Reset the flag
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errormsg');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errormsg');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = registerUsername.value.trim();
    const emailValue = registerEmail.value.trim();
    const passwordValue = registerPassword.value.trim();
    const password2Value = registerPassword2.value.trim();

    if(usernameValue === '') {
        setError(registerUsername, 'Username is required');
        return false;
    } else if (usernameValue.length < 6 ) {
        setError(registerUsername, 'Username must be at least 6 character.')
        return false;
    } else {
        setSuccess(registerUsername);
    }

    if(emailValue === '') {
        setError(registerEmail, 'Email is required');
        return false;
    } else if (!isValidEmail(emailValue)) {
        setError(registerEmail, 'Provide a valid email address');
        return false;
    } else {
        setSuccess(registerEmail);
    }

    if(passwordValue === '') {
        setError(registerPassword, 'Password is required');
        return false;
    } else if (passwordValue.length < 8 ) {
        setError(registerPassword, 'Password must be at least 8 character.')
        return false;
    } else {
        setSuccess(registerPassword);
    }

    if(password2Value === '') {
        setError(registerPassword2, 'Please confirm your password');
        return false;
    } else if (password2Value !== passwordValue) {
        setError(registerPassword2, "Passwords doesn't match");
        return false;
    } else {
        setSuccess(registerPassword2);
    }

    if(password2Value === '') {
        setError(registerPassword2, 'Please confirm your password');
        return false;
    } else if (password2Value !== passwordValue) {
        setError(registerPassword2, "Passwords doesn't match");
        return false;
    } else {
        setSuccess(registerPassword2);
    }

    if (!termsPrivacyCheckbox.checked) {
        showAlert('You must agree to the terms and privacy.')
        return false;
    } 

    return true;
    
};

document.addEventListener("mousemove", parallax);
    function parallax(e){
      document.querySelectorAll(".object").forEach(function(move){

        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 100;
        var y = (e.clientY * moving_value) / 100;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
      });
    }

// Add an event listener to each input field
const inputFields = document.querySelectorAll('.input-box input');
inputFields.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
            input.classList.add('has-value');
        } else {
            input.classList.remove('has-value');
        }
    });
});