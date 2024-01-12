function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var timeString = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    document.getElementById('time').innerText = timeString;
}

// 매 초마다 updateTime 함수를 호출하여 시간을 업데이트합니다.
setInterval(updateTime, 1000);

// 페이지가 로드될 때 한 번 호출하여 초기 시간을 설정합니다.
updateTime();