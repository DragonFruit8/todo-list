import {useState} from 'react';
import TodoList from './features/TodoList/TodoList';
import TodoForm from './features/TodoForm';
import './App.css';

function App () {
  const [todoList, setTodoList] = useState ([]);

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
        return {...todo, isCompleted: true};
      }
      return todo;
    });
    setTodoList (updatedTodos);
  }

  function updateTodo (editedTodo) {
    const updatedTodo = todoList.map (todo => {
      if (todo.title !== editedTodo) {
        return {
          id: todo.id,
          title: editedTodo,
          isCompleted: todo.isCompleted,
        };
      }
      return editedTodo;
    });

    setTodoList (updatedTodo);
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
