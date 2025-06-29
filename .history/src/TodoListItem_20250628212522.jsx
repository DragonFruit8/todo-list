function TodoListItem({id = [1, 2, 3], title}) {
  return <li key={id}>{title}</li>;
}

export default TodoListItem;
