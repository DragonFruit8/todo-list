import TodoListItem from "./TodoListItem";
import "./todo.css";

function TodoList({ todoList, onCompleteTodo }) {
  const filteredTodoList = todoList.filter((todo) => !todo.isCompleted);

  return (
    <>
      <ul>
        {filteredTodoList.length > 0 ? (
          filteredTodoList.map((item) => {
            return (
              <TodoListItem
                key={item.id}
                title={item.title}
                checked={item.isCompleted}
                onCompleteTodo={() => onCompleteTodo(item.id)}
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
