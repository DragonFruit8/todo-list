import TodoListItem from './TodoListItem';

function TodoList({todoList, onCompleteTodo, onUpdateTodo, isLoading }) {
  
  return (
    <ul>
      {isLoading ? <p>Todo list is loading... </p>
        : todoList
        .map ((item) => (
            <TodoListItem
              key={item.id}
              title={item.title}
              checked={item.isComplete}
              onUpdateTodo={(title) => onUpdateTodo(item.id, title)}
              onCompleteTodo={(event) => onCompleteTodo(item.id, event)}
            />
          ))}
    </ul>
  );
}
export default TodoList;