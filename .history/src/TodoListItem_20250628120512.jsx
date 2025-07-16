import "./items.json";

function TodoListItem({id, title}) {
  let id = props.id;
  let title = props.title;

  return <li key={props.id}>{props.title}</li>;
}

export default TodoListItem;
