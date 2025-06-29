
function TodoListItem({id,title}) {
  // todoItem 
 
  return <li key={id}>{title}</li>;
}

export default TodoListItem;