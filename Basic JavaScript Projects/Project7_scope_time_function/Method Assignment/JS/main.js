function showTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    let timeString = "";

    if (hours < 10) {
        timeString += "0" + hours;
    } else {
        timeString += hours;
    }

    timeString += ":";

    if (minutes < 10) {
        timeString += "0" + minutes;
    } else {
        timeString += minutes;
    }

    timeString += ":";

    if (seconds < 10) {
        timeString += "0" + seconds;
    } else {
        timeString += seconds;
    }

    document.getElementById("timeDisplay").innerHTML = "Current time: " + timeString;
}
