import "./App.css";
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { useState } from "react";

function App() {
  

  return (
    <div>
      <h1>My Todos</h1>
        <TodoForm />
      <ul>
        <TodoList />
      </ul>
    </div>
  );
}

export default App;
