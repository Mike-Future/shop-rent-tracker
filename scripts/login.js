
function login() {
    // Simple login simulation (replace with actual validation later)
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Dummy credentials for demonstration
    if (username === "admin" || "admin2" && password === "admin123") {
        // Redirect to the dashboard after successful login
        window.location.href = 'dashboard.html';
    } else {
        alert("Invalid username or password!");
    }
}
