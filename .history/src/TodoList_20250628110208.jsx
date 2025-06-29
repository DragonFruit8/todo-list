import TodoListItem from './TodoListItem';

function TodoList({todoItem}) {
 
  return (
    <ul>
       <TodoListItem
        key={id}
        title={todoItem.title}
       />
    </ul>
  )
  
}

export default TodoList;
