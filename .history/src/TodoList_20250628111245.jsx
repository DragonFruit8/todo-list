import TodoListItem from './TodoListItem';

function TodoList(props) {
 const todoItem = props.todoItem
  return (
    <ul>
       <TodoListItem
        key={todoItem.id}
       >
        {todoItem.title}
        </TodoListItem>
    </ul>
  )
  
}

export default TodoList;
