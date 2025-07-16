import TodoListItem from "./TodoListItem";

function TodoList({  }) {
  return (
    <ul>
      {todo.map((todo) => {
        return <TodoListItem key={id} todo={todo} />;
      })}
    </ul>
  );
}
export default TodoList;
