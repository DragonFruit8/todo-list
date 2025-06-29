import todoItem from './todoItem.json'
function TodoListItem({id, title}) {
  const todo = todoItem.map(item => {
    return (
      <li key={item.id}  
    )
  })
  return <li key={id}>{title}</li>;
  
}

export default TodoListItem;
