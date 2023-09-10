   // I created this function to update the current day of the week
   function updateDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = dayOfWeek;
}

// This function updates the current UTC time
function updateUTCTime() {
    const currentDate = new Date();
    const utcTime = currentDate.getTime();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = utcTime;
}

// This updates the day of the week and UTC time every second
setInterval(() => {
    updateDayOfWeek();
    updateUTCTime();
}, 1000);