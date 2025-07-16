import "./items.json";

function TodoListItem({id = 1, }) {
  
  return <li key={id}>{title}</li>;
}

export default TodoListItem;
