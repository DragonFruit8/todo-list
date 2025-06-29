import "./items.json";

function TodoListItem({id = 1, title }) {
  
  return <li key={id}>{title}</li>;
}

export default TodoListItem;
