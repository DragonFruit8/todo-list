
function TodoListItem({id,title}) {
  // todoItem.json created to hold JSON Object, in case props {id,title} are incorrect per instructions
  // I see this as a pause before continuation of week-04 
  return <li key={id}>{title}</li>;
}

export default TodoListItem;