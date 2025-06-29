import "./items.json";

function TodoListItem({id, title}) {
  let id = props.id;
  let title = props.title;

  return <li key={id}>{title}</li>;
}

export default TodoListItem;
