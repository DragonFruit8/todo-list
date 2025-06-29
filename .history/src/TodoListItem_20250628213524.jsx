
function TodoListItem({id,title}) {
  // todoItem.json
 
  return <li key={id}>{title}</li>;
}

export default TodoListItem;