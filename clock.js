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

function addAlarm() {
    var hourInput = document.querySelector('.hour');
    var minInput = document.querySelector('.min');
    var secInput = document.querySelector('.sec');
    var alarmRecords = document.getElementById('alarmRecords');

    // 입력값이 하나라도 비어있으면 콘솔에 출력하고 추가를 중단
    if (!hourInput.value || !minInput.value || !secInput.value) {
        alert('시, 분, 초를 모두 입력하세요.');
        return;
    }

    // 시, 분, 초가 유효한 범위 내에 있는지 확인
    var hour = parseInt(hourInput.value, 10);
    var min = parseInt(minInput.value, 10);
    var sec = parseInt(secInput.value, 10);

    if (isNaN(hour) || isNaN(min) || isNaN(sec) || hour < 0 || hour > 23 || min < 0 || min > 59 || sec < 0 || sec > 59) {
        alert('시, 분, 초는 각각 0-23, 0-59, 0-59 사이의 값이어야 합니다.');
        return;
    }

    // 알람이 3개 이상이면 콘솔에 출력하고 추가를 막음
    if (alarmRecords.children.length >= 3) {
        alert('알람은 최대 3개까지 추가할 수 있습니다.');
        return;
    }

    var alarmTime = `${hourInput.value.padStart(2, '0')}:${minInput.value.padStart(2, '0')}:${secInput.value.padStart(2, '0')}`;
    var newRecord = document.createElement('div');
    newRecord.classList.add('alarm-item');
    newRecord.innerHTML = `
        <span>${alarmTime}</span>
        <span class="delete-btn" onclick="deleteAlarm(this)">삭제</span>
    `;
    alarmRecords.appendChild(newRecord);

    // 추가 후 입력 필드 초기화
    hourInput.value = '';
    minInput.value = '';
    secInput.value = '';
}


function clearAlarms() {
    var alarmRecords = document.getElementById('alarmRecords');
    alarmRecords.innerHTML = ''; // 알람 기록 삭제
}

function deleteAlarm(btn) {
    var alarmItem = btn.closest('.alarm-item');
    alarmItem.remove();
}

setInterval(updateTime, 1000);
setInterval(updateBatteryStatus, 1000);

updateTime();