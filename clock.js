function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var timeString = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    document.getElementById('time').innerText = timeString;
}

function updateBatteryStatus() {
    const batteryStatusElement = document.getElementById('battery-status');
    const clockElement = document.querySelector('.clock');

    let currentBattery = parseInt(batteryStatusElement.innerText, 10);
    if (currentBattery > 0) {
        currentBattery -= 1;
        batteryStatusElement.innerText = `${currentBattery}%`;
    } else {
        clockElement.classList.add('low-battery');
    }
}

setInterval(updateTime, 1000);
setInterval(updateBatteryStatus, 1000);

updateTime();