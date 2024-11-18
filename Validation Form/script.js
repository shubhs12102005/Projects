// Get references to DOM elements for submit button and error messages
const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const conpasswordError = document.getElementById('conpasswordError');

// Add an event listener for the submit button click event
submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get input field values
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let conpassword = document.getElementById('conpassword');

    // Validate all fields and proceed if all are valid
    if (validateName() && validateEmail() && validatepassword() && validateconfirmpassword()) {
        alert("Successfully Submitted"); // Show success message

        // Reset form fields
        name.value = "";
        email.value = "";
        password.value = "";
        conpassword.value = "";

        // Remove validation classes for success and error icons
        nameError.previousElementSibling.classList.remove('fa-check');
        emailError.previousElementSibling.classList.remove('fa-check');
        passwordError.previousElementSibling.classList.remove('fa-check');
        conpasswordError.previousElementSibling.classList.remove('fa-check');
        nameError.previousElementSibling.classList.remove('fa-xmark');
        emailError.previousElementSibling.classList.remove('fa-xmark');
        passwordError.previousElementSibling.classList.remove('fa-xmark');
        conpasswordError.previousElementSibling.classList.remove('fa-xmark');
    }
});

// Function to validate the name field
function validateName() {
    let name = document.getElementById('name').value;

    // Check if the name field is empty
    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        nameError.previousElementSibling.classList.add('fa-xmark'); // Add error icon
        return false;
    }

    // Validate full name format (First Last)
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Enter Full Name";
        nameError.previousElementSibling.classList.add('fa-xmark'); // Add error icon
        return false;
    }

    // Clear error message and add success icon
    nameError.innerHTML = "";
    nameError.previousElementSibling.classList.add('fa-check');
    return true;
}

// Function to validate the email field
function validateEmail() {
    let email = document.getElementById('email').value;

    // Check if the email field is empty
    if (email.length == 0) {
        emailError.innerHTML = "Enter your Email";
        emailError.previousElementSibling.classList.add('fa-xmark'); // Add error icon
        return false;
    }

    // Validate email format
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerHTML = "Enter valid Email";
        emailError.previousElementSibling.classList.add('fa-xmark'); // Add error icon
        return false;
    }

    // Clear error message and add success icon
    emailError.innerHTML = "";
    emailError.previousElementSibling.classList.add('fa-check');
    return true;
}

// Function to validate the password field
function validatepassword() {
    let password = document.getElementById('password').value;

    // Check if the password field is empty
    if (password.length == 0) {
        passwordError.innerHTML = "Password is required";
        passwordError.previousElementSibling.classList.add('fa-xmark'); // Add error icon
        return false;
    }

    // Validate password format (must include uppercase, lowercase, digit, special character, and be 8-12 characters long)
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/)) {
        passwordError.innerHTML = "include( [A-Z],[a-z],[0-9],@\,?, etc ).";
        passwordError.previousElementSibling.classList.add('fa-xmark'); // Add error icon
        return false;
    }

    // Clear error message and add success icon
    passwordError.innerHTML = "";
    passwordError.previousElementSibling.classList.add('fa-check');
    return true;
}

// Function to validate the confirm password field
function validateconfirmpassword() {
    let conpassword = document.getElementById('conpassword').value;
    let password = document.getElementById('password');

    // Check if the confirm password field is empty
    if (conpassword.length == 0) {
        conpasswordError.innerHTML = "Confirm Password is required";
        conpasswordError.previousElementSibling.classList.add('fa-xmark'); // Add error icon
        return false;
    }

    // Check if confirm password matches the password
    if (conpassword != password.value) {
        conpasswordError.innerHTML = "Password is not matching";
        conpasswordError.previousElementSibling.classList.add('fa-xmark'); // Add error icon
        return false;
    }

    // Clear error message and add success icon
    conpasswordError.innerHTML = "";
    conpasswordError.previousElementSibling.classList.add('fa-check');
    return true;
}
