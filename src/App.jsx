import { useState } from 'react';
import TodoList from './features/TodoList/TodoList';
import TodoForm from './features/TodoForm';
import './App.css';

function App () {
  const [todoList, setTodoList] = useState ([]);

  function addTodo (title) {
    const newTodo = {
      id: Date.now (),
      title,
      isComplete: false,
    };
    setTodoList ([...todoList, newTodo]);
  }

  function completeTodo (id) {
    const updatedTodos = todoList.map (todo => {
      if (todo.id === id) {
        return {...todo, isComplete: true};
      }
      return todo;
    });
    setTodoList (updatedTodos);
  }

  function updateTodo (id, editedTodo) {
    const updatedTodo = todoList.map (todo => {
      if (todo.id === id) {
        let title = editedTodo;
        return {id: todo.id, title, isComplete: todo.isComplete};
      }
      return todo;
    });
    setTodoList ([...updatedTodo]);
  }

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todoList={todoList}
        onUpdateTodo={updateTodo}
        onCompleteTodo={completeTodo}
      />
    </div>
  );
}

export default App;
