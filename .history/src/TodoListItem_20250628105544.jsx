import items "./items.json";
function TodoListItem() {
//   const todoItem = props.todoItem;
  return (
    <>
      <li key={todoItem.id}>{todoItem.title}</li>
    </>
  );
}

export default TodoListItem;
