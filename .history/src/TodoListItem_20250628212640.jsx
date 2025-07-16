function TodoListItem({
  id = [ ],
  title = [1,'review resources', 2,'take notes', 3,'code out app'],
}) {
  return <li key={id}>{title}</li>;
}

export default TodoListItem;
