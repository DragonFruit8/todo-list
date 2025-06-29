import "./items.json";

function TodoListItem({todo}) {
  const todo = [
    { id: 1, title: "review resources" },
    { id: 2, title: "take notes" },
    { id: 3, title: "code out app" },
  ];
  let id = todo.id;

  return <li key={id}>{todo.title}</li>;
}

export default TodoListItem;
