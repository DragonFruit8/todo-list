import todoItems from "./items.json";
function TodoListItem({todoItems}) {
//   const todoItem = props.todoItem;
  return (
    <>
      <li key={todoItem.id}>{todoItem.title}</li>
    </>
  );
}

export default TodoListItem;
