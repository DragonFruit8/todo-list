import TodoListItem from './TodoListItem';

function TodoList({todoItem}) {
 
  return (
    <ul>
       <TodoListItem 
        title={todoItem.title}
       />
    </ul>
  )
  
}

export default TodoList;
