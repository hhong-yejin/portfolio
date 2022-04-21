const api_key = "ba78b9e617f2cb21f7d581050f17bd36";

function good(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:last-child");
            const city = document.querySelector("#weather span:first-child");
            city.innerHTML = data.name;
            weather.innerHTML = `${data.main.temp}°C ${data.weather[0].main}`;
        });
}

function g_error() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(good, g_error);
// 브라우저에서 위치 좌표 제공, 위함수는 2개의 인수를 받음 1.성공했을 때, 2.에러났을 때
