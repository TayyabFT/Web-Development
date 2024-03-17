$(document).ready(function() {
    $("#signInForm").submit(function(event) {
        event.preventDefault();
        var username = $("#username").val();
        var password = $("#password").val();

        if (username === "") {
            alert("Username cannot be empty.");
            return;
        }

        if (password === "") {
            alert("Password cannot be empty.");
            return;
        }

        // Perform sign-in logic here
    });

    $("#signUpForm").submit(function(event) {
        event.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var password = $("#signUpPassword").val();
        var confirmPassword = $("#confirmPassword").val();
        var dob = $("#dob").val();
        var gender = $("#gender").val();

        if (name === "") {
            alert("Name cannot be empty.");
            return;
        }

        if (email === "") {
            alert("Email cannot be empty.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Invalid email format.");
            return;
        }

        if (phone === "") {
            alert("Phone cannot be empty.");
            return;
        }

        if (!validatePhone(phone)) {
            alert("Invalid phone format.");
            return;
        }

        if (password === "") {
            alert("Password cannot be empty.");
            return;
        }

        if (!validatePassword(password)) {
            alert("Password must contain at least one special character and one number.");
            return;
        }

        if (confirmPassword !== password) {
            alert("Passwords do not match.");
            return;
        }

        if (dob === "") {
            alert("Date of Birth cannot be empty.");
            return;
        }

        if (gender === "") {
            alert("Gender cannot be empty.");
            return;
        }

        // Perform sign-up logic here
    });
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    var re = /^[0-9]{4}-[0-9]{7}$/;
    return re.test(phone);
}

function validatePassword(password) {
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
}