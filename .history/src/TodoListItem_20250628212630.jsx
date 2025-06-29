function TodoListItem({
  id = [  3],
  title = [1,'review resources', 'take notes', 'code out app'],
}) {
  return <li key={id}>{title}</li>;
}

export default TodoListItem;
