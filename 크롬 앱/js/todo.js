const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const todos_Key = "todos";

let todos = [];

function saveTodo() {
    localStorage.setItem(todos_Key, JSON.stringify(todos));
    // localstoragedms array로 저장 안됨. JSON.stringify로 array같은 string으로 저장
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    // 클릭(event)한 타겟에 부모(지울 todoList li)
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodo();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const dButton = document.createElement("button");
    dButton.innerText = "X"
    dButton.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(dButton);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    // newTodo에 input값 저장
    todoInput.value = "";
    // input칸 비우기(newTodo에 이상x)
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    todos.push(newTodoObj);
    // todos 데이터 저장 array에 newTodo 값 저장
    paintTodo(newTodoObj);
    saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(todos_Key);

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    // string으로 변했던 todos, array로 꺼냄
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}