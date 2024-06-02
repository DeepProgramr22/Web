// JavaScript code for button interactions

// Function to show an alert and then redirect to the home page
function hireMe() {
    alert('Coming Soon');
    window.location.href = 'index.html'; // Redirect to the home page
}

// Add event listener for the "Hire Me" button
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', hireMe);
    });
});
