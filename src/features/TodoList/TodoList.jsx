import TodoListItem from "./TodoListItem";
import "./TodoList.module.css";

function TodoList({ isLoading, todoList, onUpdateTodo, onCompleteTodo }) {
  return (
    <ul>
      {isLoading ? (
        <div className="loading">
          <h2>Todo list is loading... </h2>
        </div>
      ) : (
        todoList.map((item) => {
          return (
            <TodoListItem
              key={item.id}
              id={item.id}
              title={item.title}
              checked={item.isComplete}
              onUpdateTodo={(title) => onUpdateTodo(item.id, title)}
              onCompleteTodo={(event) => onCompleteTodo(item.id, event)}
            />
          );
        })
      )}
    </ul>
  );
}

export default TodoList;
