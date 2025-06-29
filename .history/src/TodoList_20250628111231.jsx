import TodoListItem from './TodoListItem';

function TodoList(props) {
 const todoItem = props.todoItem
  return (
    <ul>
       <TodoListItem
        key={todoItem.id}
        name={todoItem.title}
       />
    </ul>
  )
  
}

export default TodoList;
