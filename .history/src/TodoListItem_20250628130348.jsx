import "./items.json";

function TodoListItem({id =}) {
  
  return <li key={todo.id}>{todo.title}</li>;
}

export default TodoListItem;
