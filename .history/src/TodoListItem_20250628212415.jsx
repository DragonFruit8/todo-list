import todoItem from './todoItem.json'
function TodoListItem({id, title}) {
  const todo = todoItem.map(item => {
    return (
      <li key={item.id}>{item.title}</li>  
    )
  })
  return (
  {todo}
  <li key={id}>{title}</li>;
  
}

export default TodoListItem;
