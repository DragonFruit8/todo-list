import TodoListItem from './TodoListItem';

function TodoList({todoItem}) {
 
  return (
    <ul>
       <li
       key={todoItem.id} >
        {todoItem.title}
       </li>
    </ul>
  )
  
}

export default TodoList;
