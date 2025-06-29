import TodoListItem from './TodoListItem';

function TodoList({todo}) {
 return (
  <TodoListItem 
    todo={todo.title}
  />
 )
  
}

export default TodoList;
