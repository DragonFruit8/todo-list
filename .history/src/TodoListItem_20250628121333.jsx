import todoItem from "./items.json";

function TodoListItem({id}) {
  

  return <li key={todoItem.id}>{todoItem.title}</li>;
}

export default TodoListItem;
