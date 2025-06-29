import "./App.css";
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { useState } from "react";

function App() {
  const [newTodo, setNewTodo] = useState("Item")

  return (
    <div>
      <h1>My Todos</h1>
        <TodoForm />
      <ul>
      <li></li>
        <TodoList />
      </ul>
    </div>
  );
}

export default App;
