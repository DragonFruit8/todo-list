import "./items.json";

function TodoListItem({prop}) {
  

  return (todo.map((item) => {
    return <li key={item.id}>{item.title}</li>;
  }));
}

export default TodoListItem;
