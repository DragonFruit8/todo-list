import "./App.css";
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { useState } from "react";

function App() {
  const [newTodo, setNewTodo] = useState("New Item")

  return (
    <div>
      <h1>My Todos</h1>
        <TodoForm />
        <TodoList />
      <p>{newTodo}</p>
    </div>
  );
}

export default App;
