import TodoListItem from "./TodoListItem";

function TodoList(todo }) {
  return (
    <ul>
      {todo.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo.title} />;
      })}
    </ul>
  );
}
export default TodoList;
