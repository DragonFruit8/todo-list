import "./App.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { useState } from "react";
// import todoItem from "./items.json";

function App({}) {
  // const [newTodo] = useState("");

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm />
      <TodoList />
      
    </div>
  );
}

export default App;
