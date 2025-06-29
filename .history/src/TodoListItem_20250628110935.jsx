import "./items.json";

function TodoListItem({props}) {
  //   const todoItem = props.todoItem;
  return (<li key={props.id}>{props.title}</li>);
}

export default TodoListItem;
