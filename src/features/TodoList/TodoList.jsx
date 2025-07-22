import TodoListItem from "./TodoListItem";
import "../../todo.css";

function TodoList({ todoList, onCompleteTodo, onUpdateTodo }) {
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
                onUpdateTodo={() => onUpdateTodo(item.title)}
                onCompleteitem={() => onCompleteTodo(item.id)}
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
