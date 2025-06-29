import TodoListItem from './TodoListItem';

function TodoList({todoItem}) {
 
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
