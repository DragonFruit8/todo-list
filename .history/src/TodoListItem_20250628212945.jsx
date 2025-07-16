function TodoListItem({[
  {id: 1, title: 'review resources'}, 
  {id: 2, title: 'take notes'}, 
  {id = 3, title: 'code out app'}
]}) {
  return <li key={id}>{title}</li>;
}

export default TodoListItem;
