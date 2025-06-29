
function TodoListItem({id,title}) {
  // todoItem.json created to hold JSON Object, in case props {id,title} are incorrect per instructions
  //
 
  return <li key={id}>{title}</li>;
}

export default TodoListItem;