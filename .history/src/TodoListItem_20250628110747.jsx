import "./items.json";

function TodoListItem({id, }) {
  //   const todoItem = props.todoItem;
  return (<li key={todoItem.id}>{todoItem.title}</li>);
}

export default TodoListItem;
