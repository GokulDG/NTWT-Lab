document.addEventListener("keydown",function(e){
    console.log(e5);
});

function validateForm() {
var registrationNo = document.querySelector('.first-name').value;
var number = document.querySelector('.last-name').value;
var username = document.querySelector('.username').value;
var email = document.querySelector('.email').value;
var password = document.querySelector('.password').value;
var confirmPassword = document.querySelector('.password2').value;

// Simple validation for empty fields
if (registrationNo === '' || number === '' || username === '' || email === '' || password === '' || confirmPassword === '') {
    alert('Please fill in all fields');
    return false;
}
var phoneRegex = /^\d{10}$/; // Matches a 10-digit phone number

if (!phoneRegex.test(number)) {
    alert('Please enter a valid 10-digit phone number');
    return false;
}

// Validate password length
if (password.length < 8) {
    alert('Password should be at least 8 characters long');
    return false;
}

// Confirm password match
if (password !== confirmPassword) {
    alert('Passwords do not match');
    return false;
}

// If all validations pass, the form submits
return true;
}

document.querySelector('form').addEventListener('submit', function(event) {
if (!validateForm()) {
    event.preventDefault(); // Prevent form submission if validation fails
}
});