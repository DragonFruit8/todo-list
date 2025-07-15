import {useState} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css';

function App () {
  const [todoList, setTodoList] = useState ([]);

  // Set new item w/ (id,title,isCompleted: false)
  function addTodo (title) {
    const newTodo = {
      id: Date.now (),
      title,
      isCompleted: false,
    };
    setTodoList ([...todoList, newTodo]);
  }

  function completeTodo (id) {
    const updatedTodos = todoList.map (todo => {
      if (todo.id === id) {
        
        return {
          ...todo,
          isCompleted: true,
        };
      }
      return todo;
    });
    return updatedTodos;
  }

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onCompletedTodo={completeTodo} />
    </div>
  );
}

export default App;
