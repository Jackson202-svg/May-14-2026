const targetDate = new Date("May 14, 2026 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        document.querySelector(".container").innerHTML = "<h1>🎉 It's May 14, 2026! 🎉</h1>";
        return;
    }

    const totalDays = Math.floor(distance / (1000 * 60 * 60 * 24));

    const months = Math.floor(totalDays / 30.44); // approx months
    const weeks = Math.floor(totalDays / 7);

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("months").innerText = months;
    document.getElementById("weeks").innerText = weeks;
    document.getElementById("days").innerText = totalDays;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);
