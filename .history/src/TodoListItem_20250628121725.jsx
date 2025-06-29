import "./items.json";

function TodoListItem({}) {
  let id = todoItem.id;
  let title = todoItem.title;
  

  return (
  // <li key={id}>{title}</li>,
    console.log(id, title)
  );
}

export default TodoListItem;
