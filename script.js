// Target date: May 9th, 2026, at 10:00 AM PDT (Pacific Time)
const targetDate = new Date('2026-05-09T10:00:00-07:00').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update DOM
    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById('countdown').innerHTML = "<h2 class='celebrate-msg'>Today is the Day!</h2>";
    }
};

// Initial call
updateCountdown();

// Update every second
const timerInterval = setInterval(updateCountdown, 1000);
