
function TodoListItem({id,title}) {
  // todoItem.json created to hold JSON Object, in case props
 
  return <li key={id}>{title}</li>;
}

export default TodoListItem;