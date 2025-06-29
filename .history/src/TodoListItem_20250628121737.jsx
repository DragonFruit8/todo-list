import "./items.json";

function TodoListItem({id, title}) {
  let id = todoItem.id;
  let title = todoItem.title;
  

  return (
  // <li key={id}>{title}</li>,
    console.log(todoItem.id, todoItem.title)
  );
}

export default TodoListItem;
