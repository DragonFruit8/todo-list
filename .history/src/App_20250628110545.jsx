import "./App.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { useState } from "react";
import todoItem from "./items.json";

function App() {
  const [newTodo] = useState(todoItem.newTodo);

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm />
      <TodoList />
      <ul>
        {newTodo.map((item) => {
          <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
