import "./items.json";

function TodoListItem({todo}) {
  const todo ;
  let id = todo.id;
  let title = todo.title;

  return <li key={id}>{title}</li>;
}

export default TodoListItem;
