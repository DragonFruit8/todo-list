import todoItem from "./items.json";

function TodoListItem() {
  let id = todoItem.id;
  let title = todoItem.title;
  

  return (
  // <li key={id}>{title}</li>,
    {{console.log(todoItem.id, todoItem.title)}}
  );
}

export default TodoListItem;
