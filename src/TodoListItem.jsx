function TodoListItem({ id, title }) {
  return <li key={id}>{title}</li>;
}

export default TodoListItem;