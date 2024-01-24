setInterval(displayTime, 1000);

function displayTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour time to 12-hour time
    hours = hours % 12 || 12;

    let timeString = `${hours}:${addZero(minutes)}:${addZero(seconds)} ${ampm}`;
    document.getElementById("time").innerHTML = timeString;
}

function addZero(value) {
    return value < 10 ? '0' + value : value;
}
