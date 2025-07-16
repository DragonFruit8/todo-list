function TodoListItem({[
  {id: 1, title: 'review resources'}, 
  {id:2,'take notes'}, 
  {id:3,'code out app'}],
}) {
  return <li key={id}>{title}</li>;
}

export default TodoListItem;
