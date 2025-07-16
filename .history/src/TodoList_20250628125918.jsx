import TodoListItem from "./TodoListItem";

function TodoList({ todo }) {
  
  return (
    <ul>
      <TodoListItem todo={todo} />
    </ul>
  );
}
export default TodoList;
