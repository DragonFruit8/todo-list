
function TodoListItem({id,title}) {
  // todoItem.json created to hold JSON Object 
 
  return <li key={id}>{title}</li>;
}

export default TodoListItem;