import todoItem from "./items.json";

function TodoListItem({id, }) {
  let id = todoItem.id;
  let title = todoItem.title;

  return <li key={todoItem.id}>{title}</li>;
}

export default TodoListItem;
