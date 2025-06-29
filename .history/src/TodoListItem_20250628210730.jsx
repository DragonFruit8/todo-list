// import todoItem from './items.json';

function TodoListItem({props}) {
 
  return <li key={props.id}>{props.item}</li>;
}

export default TodoListItem;