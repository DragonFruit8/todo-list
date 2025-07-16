import todoItem from "./items.json";

function TodoListItem() {
  let id = todoItem.id;

  return <li key={todoItem.id}>{todoItem.title}</li>;
}

export default TodoListItem;
