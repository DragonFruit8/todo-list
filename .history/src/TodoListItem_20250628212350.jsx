import todoItem from './todoItem.json'
function TodoListItem({id, title}) {
  const todo = todoItem.map(todo => {
    return (
      <li key={todo.id}>{todo.title}</li>  
    )
  })
  return <li key={id}>{title}</li>;
  
}

export default TodoListItem;
