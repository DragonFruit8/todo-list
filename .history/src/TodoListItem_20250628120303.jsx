import "./items.json";

function TodoListItem({ todo }) {
  return (
  <li>{todo.title}</li>
);
}

export default TodoListItem;
