import "./items.json";

function TodoListItem({todo}) {
  //   const todoItem = todo.todoItem;
  return (<li>{todo.title}</li>);
}

export default TodoListItem;
