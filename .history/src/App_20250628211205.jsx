import { useState } from "react";
import TodoListItem from "./TodoListItem";
import TodoForm from "./TodoForm";
import "./App.css";


function App() {
// eslint-disable-next-line no-unused-vars
const [todoItem, setTodoItem] = useState("");

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm />
        <TodoListItem />
    </div>
  );
}

export default App;
