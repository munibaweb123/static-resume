function toggleDarkMode() {
    document.body.classList.toggle('dark-mode'); // Toggle the dark-mode class on the body
    var button = document.querySelector('.toggle-button');
    // Change the button text based on the current mode
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = '☀️'; // Sun icon for light mode
    }
    else {
        button.textContent = '🌙'; // Moon icon for dark mode
    }
}
// Attach the event listener for the button
var toggleButton = document.querySelector('.toggle-button');
toggleButton.addEventListener('click', toggleDarkMode);
