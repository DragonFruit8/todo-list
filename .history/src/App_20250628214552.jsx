import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "./App.css";


function App() {
// eslint-disable-next-line no-unused-vars
const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm />
      <p>{newTodo}</p>
        <TodoList onLoad={/>
    </div>
  );
}

export default App;
