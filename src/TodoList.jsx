import { useState } from 'react';
import TodoListItem from './TodoListItem';
import './todo.css';

function TodoList({todoList}) {
  const [isCompleted, setIsCompleted ] = useState(false)
  const filteredTodoList = todoList.filter (todo => todo.isCompleted === false);
  
  return (
    <>
      {filteredTodoList.length > 0
        ? todoList.map (item => {
          return(
          <ul key={item.id}>
            <TodoListItem
              key={item.id}
              title={item.title}
              checked={isCompleted}
              onCompleteTodo={(event) => setIsCompleted(event.target.checked)}
            />
            </ul>)})
        : <p>Add todo above to get started</p>}
    </>
  );
}
export default TodoList;
