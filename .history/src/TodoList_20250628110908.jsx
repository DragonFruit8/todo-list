import TodoListItem from './TodoListItem';

function TodoList(props) {
 const card = props.card
  return (
    <ul>
       <TodoListItem
        key={card.id}
        title={card.title}
       />
    </ul>
  )
  
}

export default TodoList;
