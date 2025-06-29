import todoItem from "./items.json";

function TodoListItem() {
  let id = todoItem.id;
  let title = todoItem.title;
  console.log(id, title)

  return <li key={id}>{title}</li>;
}

export default TodoListItem;
