import TodoListItem from './TodoListItem';
import styled from 'styled-components';
import './TodoList.module.css'

function TodoList({ isLoading, todoList, onUpdateTodo, onCompleteTodo }) {
  
  return (
    <ul>
      {isLoading ? <p>Todo list is loading... </p>
        : todoList
        .map ((item) => {
          return (
            <TodoListItem
              key={item.id}
              id={`checkbox${item.id}`}
              title={item.title}
              checked={item.isComplete ? 'checked' : '' }
              className={styled.checkedItem}
              onUpdateTodo={(title) => onUpdateTodo(item.id, title)}
              onCompleteTodo={(event) => onCompleteTodo(item.id, event)}
            />
        )})}
    </ul>
  );
}

export default TodoList;