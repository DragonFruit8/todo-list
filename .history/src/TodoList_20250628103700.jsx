import {todoItem} from './TodoListItem';

function TodoList() {
 
  return (
    <ul>
       <TodoListItem
       key={todoItem.id} />
    </ul>
  )
  
}

export default TodoList;
