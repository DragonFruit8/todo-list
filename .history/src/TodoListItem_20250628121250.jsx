import todoItem from "./items.json";

function TodoListItem() {
  let id = todoItem.id;
  let title = props.title;

  return <li key={id}>{title}</li>;
}

export default TodoListItem;
