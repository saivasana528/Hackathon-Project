document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    if (username === "admin" && password === "password") {
        messageElement.style.color = "green";
        messageElement.textContent = "Login successful!";
        setTimeout(() => {
            window.location.href = "welcome.html"; // Redirect to a welcome page or dashboard
        }, 1000);
    } else {
        messageElement.textContent = "Invalid username or password.";
    }
});