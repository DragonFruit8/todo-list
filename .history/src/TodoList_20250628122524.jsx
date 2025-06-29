import TodoListItem from "./TodoListItem";

function TodoList({  }) {
  return (
    <ul>
      {todo.map((todo) => {
        return <TodoListItem key={todo} todo={todo} />;
      })}
    </ul>
  );
}
export default TodoList;
