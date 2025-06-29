import "./items.json";

function TodoListItem(props) {
  let title = props.title;
  
  return (
  <li>{title}</li>
);
}

export default TodoListItem;
