import TodoListItem from './TodoListItem';

function TodoList({todoItem}) {
 
  return (
    <ul>
       <TodoListItem 
        key={}
        title={todoItem.title}
       />
    </ul>
  )
  
}

export default TodoList;
