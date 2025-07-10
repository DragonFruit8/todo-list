import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css';

function App () {
  const [todoList, setTodoList] = useState ([]);

  function addTodo (title) {
    const newTodo = {
      id: Date.now (),
      title,
    };
    setTodoList ([...todoList, newTodo]);
  }

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
