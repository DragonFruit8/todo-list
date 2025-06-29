import {todoItem} from './TodoListItem';

function TodoList() {
 
  return (
    <ul>
       <li
       key={todoItem.id} >
        {todoItem}
       </li>
    </ul>
  )
  
}

export default TodoList;
