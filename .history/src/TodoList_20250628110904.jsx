import TodoListItem from './TodoListItem';

function TodoList(props) {
 const card = props.card
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
