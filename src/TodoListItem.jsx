function TodoListItem({title, onCompleteTodo, isCompleted}) {

  return (
    <li>
      <form>
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
