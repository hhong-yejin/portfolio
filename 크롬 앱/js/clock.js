// 시간

const clock = document.querySelector('#clock');

function getClock() {
    const Ndate = new Date();
    const hours = String(Ndate.getHours()).padStart(2, "0");
    const minutes = String(Ndate.getMinutes()).padStart(2, "0");
    const seconds = String(Ndate.getSeconds()).padStart(2, "0");
    // getHours엔 padStart를 쓸 수 없음(숫자라)
    clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);

// setInterval(함수, 초(1초=1000))
// 원하는 초마다 함수를 반복
// setTimeout(함수, 초)
// 원하는 초 뒤에 함수 실행

// 날짜(응용)

const today = document.querySelector('#today');

function getToday() {
    const Ndate = new Date();
    const year = Ndate.getFullYear();
    const month = String(Ndate.getMonth() + 1).padStart(2, "0");
    const date = String(Ndate.getDate()).padStart(2, "0");
    const weekday = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
    const day = weekday[Ndate.getDay()];
    today.innerText = `${year}.${month}.${date}.${day}day`;
}

getToday();
setInterval(getToday, 1000);
