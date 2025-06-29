import  from './TodoListItem';

function TodoList() {
 
  return (
    <ul>
       <TodoListItem
       key={TodoListItem.id} />
    </ul>
  )
  
}

export default TodoList;
