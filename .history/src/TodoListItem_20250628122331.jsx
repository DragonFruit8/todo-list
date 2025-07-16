import "./items.json";

function TodoListItem({props}) {
  

  return (<li key={props.id}>{}</li>);
}

export default TodoListItem;
