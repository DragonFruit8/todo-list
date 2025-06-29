import "./items.json";

function TodoListItem() {
  const todo = [
    { id: 1, title: "review resources" },
    { id: 2, title: "take notes" },
    { id: 3, title: "code out app" },
  ];
  let id = todo.id;
  let title = todo.title;

  return <li key={id}>{title}</li>;
}

export default TodoListItem;
