function TodoListItem({id = [1, 2, 3], title = ["review resources",
"take notes"
"code out app"]}) {
  return <li key={id}>{title}</li>;
}

export default TodoListItem;
