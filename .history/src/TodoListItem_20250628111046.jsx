import "./items.json";

function TodoListItem({todo}) {
  //   const todoItem = todo.todoItem;
  return (<li key={todo.id}>{todo.title}</li>);
}

export default TodoListItem;
