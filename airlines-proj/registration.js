document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmnewPassword = document.getElementById('confirmnewPassword').value;
    const registerMessageElement = document.getElementById('registerMessage');

    if (newUsername && newPassword&&confirmnewPassword) {
        // In a real application, you would send this data to the server for storage
        registerMessageElement.style.color = "green";
        registerMessageElement.textContent = "Registration successful!";
        setTimeout(() => {
            window.location.href = "login.html"; // Redirect to login page after registration
        }, 1000);
    } else {
        registerMessageElement.textContent = "Please fill in all fields.";
    }
});