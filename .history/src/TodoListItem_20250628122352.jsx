import "./items.json";

function TodoListItem({ id, title }) {
  return <li key={id}>{props.title}</li>;
}

export default TodoListItem;
