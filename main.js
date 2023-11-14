// Get current time
function updateTime() {
    const currentTime = new Date();

    // Get hours, minutes, seconds, and format them
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');

    // Create time string
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Get formatted date string
    const dateString = currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // Update DOM elements
    document.querySelector('.time').textContent = timeString;
    document.querySelector('.date').textContent = dateString;
}

updateTime();
setInterval(updateTime, 1000);

// disable right-click function
function disableRightClick() {
    document.addEventListener("contextmenu", function(event) { // listen for right-click event
      event.preventDefault(); // prevent default action
    });
  }
  
  disableRightClick();