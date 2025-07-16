import "./App.css";
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { useState } from "react";
import todoItem from "./items.json";

function App() {
  const [newTodo, setNewTodo] = useState(todoItem.newTodo);

  return (
    <div>
      <h1>My Todos</h1>
        <TodoForm />
        <TodoList />
      <p>{newTodo.map((item) => {
        <li
      })}</p>
    </div>
  );
}

export default App;
