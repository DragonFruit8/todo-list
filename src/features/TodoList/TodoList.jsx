import TodoListItem from './TodoListItem';
import '../../todo.css';

function TodoList({todoList, onCompleteTodo, onUpdateTodo, isLoading}) {
  return (
    <ul>
      {isLoading ? <p>Todo list is loading... </p>
        : todoList.map (item => (
            <TodoListItem
              key={item.id}
              title={item.title}
              checked={item.isComplete}
              onUpdateTodo={onUpdateTodo}
              onCompleteTodo={() => onCompleteTodo (item.id)}
            />
          ))}
    </ul>
  );
}
export default TodoList;
