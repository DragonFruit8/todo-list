import { useState } from "react";
import "./App.css";
import TodoListItem from "./TodoListItem";


function App() {
// eslint-disable-next-line no-unused-vars
const [todoItem, setTodoItem] = useState("");

  return (
    <div>
      <h1>My Todos</h1>
      <
        <TodoListItem />
    </div>
  );
}

export default App;
