import "./items.json";

function TodoListItem({todo}) {
  
  return <li key={todo}>{todo.title}</li>;
}

export default TodoListItem;
