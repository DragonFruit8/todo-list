import "./items.json";

function TodoListItem() {
  const todo = [
    {
      id: 1,
      title: "review resources",
    },
    {
      id: 2,
      title: "take notes",
    },
    {
      id: 3,
      title: "code out app",
    },
  ];

  return todo.map((item) => {
    return <li key={item.id}>{item.title}</li>;
  });
}

export default TodoListItem;
