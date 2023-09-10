   // I created this function to update the current day of the week. A descriptor text is concatenated to dayOfWeek. 
   function updateDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = "Today is: " + dayOfWeek;
}

// This function updates the current UTC time. A descriptor text is concatenated to utcTime. 
function updateUTCTime() {
    const currentDate = new Date();
    const utcTime = currentDate.getTime();
    document.querySelector('[data-testid="currentUTCTime"]').textContent ="The UTC time in milliseconds is: " + utcTime;
}

// This updates the day of the week and UTC time every second
setInterval(() => {
    updateDayOfWeek();
    updateUTCTime();
}, 1000);
