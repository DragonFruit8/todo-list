import todoItem from "./items.json";

function TodoListItem() {
  let id = todoItem.id;
  let title = todoItem.title;

  return <li key={id}>{todoItem.title}</li>;
}

export default TodoListItem;
