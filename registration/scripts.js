function showPopup() {
    event.preventDefault();  // Prevent form submission
    document.getElementById('popup').style.display = 'flex';  // Show the popup
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';  // Close the popup
}
