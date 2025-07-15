function TodoListItem({id, title, onCompleteTodo, isCompleted}) {

  return (
    <li>
      <form id={id}>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={onCompleteTodo}
        />
        {title}
      </form>
    </li>
  );
}

export default TodoListItem;
