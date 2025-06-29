import "./items.json";

function TodoListItem({id = 1, }) {
  
  return <li key={todo.id}>{todo.title}</li>;
}

export default TodoListItem;
