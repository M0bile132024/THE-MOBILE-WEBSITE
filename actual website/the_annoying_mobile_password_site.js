// THE MOBILE WEBSITE VERSION 1.4: The Annoying Mobile Password Site
// Author: M0bile132022
// Date of last test: 22/11/25

// Function to validate password strength

const form = document.getElementById('passwordForm');
        const message = document.getElementById('message');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const password = document.getElementById('password').value;

            if(password.length < 8) {
                message.textContent = "Error: Password must be at least 8 characters long!";
            } else if(!/[A-Z]/.test(password)) {
                message.textContent = "Error: Password must contain at least one uppercase letter!";
            } else if(!/[a-z]/.test(password)) {
                message.textContent = "Error: Password must contain at least one lowercase letter!";
            } else if(!/[0-9]/.test(password)) {
                message.textContent = "Error: Password must contain at least one number!";
            } else if(!/[\W_]/.test(password)) {
                message.textContent = "Error: Password must contain at least one special character!";
            } else {
                message.textContent = "Password accepted! But just kidding, for this site is meant to be annoying! (≧▽≦)";
                // Add link to go back to main page (index.html)
                message.innerHTML += '<br><a href="index.html" style="color: blue; text-decoration: none; font-size: 18px;">Return to Main Page</a>';
            }
        });
// Function to add letter count of password
const passwordInput = document.getElementById('password');
        const letterCount = document.getElementById('letterCount');
        passwordInput.addEventListener('input', function() {
            letterCount.textContent = `Letter Count: ${passwordInput.value.length}`;
        });
// Function to toggle password visibility
const togglePassword = document.getElementById('togglePassword');
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            togglePassword.textContent = type === 'password' ? 'Show Password' : 'Hide Password';
        });
/* End of THE MOBILE WEBSITE VERSION V1.6:QUIZZICAL STYLIST:
Author: M0bile132022
Date of last test: 11/01/2026 */

