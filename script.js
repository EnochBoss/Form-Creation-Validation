document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function(event) {
    
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

    //Form Validation
        let isValid = true;
        const messages = [];

        //Username Validation
        if(username.length < 3) {
            isValid = false;
            messages.push("Username should be 3 characters or more");
        }

        //email Validation
        if(!(email.includes('@') && email.includes('.'))) {
            isValid = false;
            messages.push("Email must contain '@' and '.' symbols");
        }

        //password Validation
        if(password.length < 8) {
            isValid = false;
            messages.push("Password should be 8 characters or more");
        }

        if (isValid === true) {
            event.preventDefault();
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.style.display = "block";

            setTimeout(() => {
                form.submit(); // actually submit after a short delay
            }, 1000);
        } else {
            event.preventDefault();
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.style.display = "block";
        }
    });
});