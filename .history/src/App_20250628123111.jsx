import { useState } from "react";
import "./App.css";
import TodoListItem from "./TodoListItem";
import todoItems from './items.json';

function App() {
const [todoItem, setTodoItem] = useState(todoItems.todoItem);

  return (
    <div>
      <h1>My Todos</h1>
        {todoItem.map((item) => {
          return (
            
          )
        })}
    </div>
  );
}

export default App;
