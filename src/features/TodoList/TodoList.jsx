import TodoListItem from "./TodoListItem";
import "../../todo.css";

function TodoList({ todoList, onCompleteTodo, onUpdateTodo }) {
  const filteredTodoList = todoList.filter((todo) => !todo.isCompleted);
  
  return (
    <>
      <ul>
        {filteredTodoList.length > 0 ? (
          filteredTodoList.map((todo) => {
            return (
              <TodoListItem
                key={todo.id}
                // Title is not updating Instance state here
                title={todo.title}
                checked={todo.isCompleted}
                onUpdateTodo={() => onUpdateTodo(todo.title)}
                onCompleteTodo={() => onCompleteTodo(todo.id)}
              />
            );
          })
        ) : (
          <p>Add todo above to get started</p>
        )}
      </ul>
    </>
  );
}
export default TodoList;
