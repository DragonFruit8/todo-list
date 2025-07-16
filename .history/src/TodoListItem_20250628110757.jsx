import "./items.json";

function TodoListItem({id, title}) {
  //   const todoItem = props.todoItem;
  return (<li key={props.id}>{props.title}</li>);
}

export default TodoListItem;
