import TodoListItem from './TodoListItem';
import '../../todo.css';


function TodoList({todoList, onCompleteTodo, onUpdateTodo, isLoading }) {
  
  return (
    <ul>
      {isLoading ? <p>Todo list is loading... </p>
        : todoList
        .map ((item, index) => (
            <TodoListItem
              key={index}
              title={item.title}
              checked={item.isComplete}
              onUpdateTodo={(title) => onUpdateTodo(item.id, title)}
              onCompleteTodo={() => onCompleteTodo (item.id)}
            />
          ))}
    </ul>
  );
}
export default TodoList;
