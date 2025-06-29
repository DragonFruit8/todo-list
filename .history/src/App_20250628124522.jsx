import { useState } from "react";
import "./App.css";
import TodoListItem from "./TodoListItem";
import todoItems from './items.json';
import TodoList from "./TodoList";

function App() {
// eslint-disable-next-line no-unused-vars
const [todoItem, setTodoItem] = useState(todoItems);

  return (
    <div>
      <h1>My Todos</h1>
        <TodoList
    </div>
  );
}

export default App;
