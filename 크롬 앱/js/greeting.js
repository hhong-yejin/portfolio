const loginform = document.querySelector('#login-form')
const logininput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const hidden_class = "hidden";
const username_key = "username";

function paintGreeting(username) {
    greeting.innerHTML = `Hello ${username}!`;
    greeting.classList.remove(hidden_class);
}

function loginbtnSubmit(event) {
    event.preventDefault();
    // 브라우저가 기본 동작을 실행하지 못하게 막기 //
    const username = logininput.value;
    localStorage.setItem(username_key, username);
    // 브라우저가 username_key에 username을 기억
    loginform.classList.add(hidden_class);
    // greeting.innerHTML = "Hello " + username + "!";
    paintGreeting(username);
}

const saveUsername = localStorage.getItem(username_key);

if (saveUsername === null) {
    loginform.classList.remove(hidden_class);
    // 저장된 이름이 없으면 show form
    loginform.addEventListener("submit", loginbtnSubmit);
    // submit 이벤트가 발생한다면, loginbtnSubmit함수를 실행시킨다는 의미 //
} else {
    paintGreeting(saveUsername);
    // 저장된 이름이 있으면 show greeting
}