import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentArray) => [...currentArray, todo]);
    setTodo("");
  };
  const delBtn = (index) => {
    setTodos(todos.filter((item, todoIndex) => index !== todoIndex));
  };
  return (
    <div>
      <h1>My To Do ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write your to do.."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => delBtn(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
