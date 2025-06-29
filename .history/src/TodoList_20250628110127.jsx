import {todoItem} from './TodoListItem';

function TodoList({todoItem}) {
 
  return (
    <ul>
       <li 
        key={todoItem.id}
        title={todoItem.title}
       />
    </ul>
  )
  
}

export default TodoList;
