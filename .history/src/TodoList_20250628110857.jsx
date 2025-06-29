import TodoListItem from './TodoListItem';

function TodoList(props) {
 const card = props.todoItem
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
