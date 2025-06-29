import TodoListItem from './TodoListItem';

function TodoList( {
 
  return (
    <ul>
       <TodoListItem
        key={todoItem.id}
        title={todoItem.title}
       />
    </ul>
  )
  
}

export default TodoList;
