
function TodoListItem({id,title}) {
  // todoItem.json created to hold JSON Object, in case 
 
  return <li key={id}>{title}</li>;
}

export default TodoListItem;