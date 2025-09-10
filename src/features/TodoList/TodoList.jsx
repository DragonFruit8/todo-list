import TodoListItem from './TodoListItem';
import './TodoList.module.css'
import {
  reducer as todosReducer,
  // actions as todoActions,
  initialState as initTodoState,
} from "../../reducers/todos.reducer";
import { useReducer } from 'react';
function TodoList({ todoList, onUpdateTodo, onCompleteTodo, onDeleteTodo }) {
  const todoState = useReducer(todosReducer, initTodoState)
  return (
    <ul>
        {/* {console.log(todoList)} */}
      {todoState.isLoading ? <p>Todo list is loading... </p>
        : todoList
        .map ((item) => {
          return (
            <TodoListItem
              key={item.id}
              id={item.id}
              title={item.title}
              checked={item.isComplete ? 'checked' : '' }
              onUpdateTodo={(title) => onUpdateTodo(item.id, title)}
              onCompleteTodo={(event) => onCompleteTodo(item.id, event)}
              onDeleteTodo={() => onDeleteTodo(item.id)}
            />
        )})}
    </ul>
  );
}

export default TodoList;