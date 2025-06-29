
function TodoListItem({id,title}) {
  // TodoItem.json created to hold JSON Object, in case props {id,title} are incorrect per instructions
  // I see this
 
  return <li key={id}>{title}</li>;
}

export default TodoListItem;