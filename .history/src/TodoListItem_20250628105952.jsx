import todoItem from "./items.json";

function TodoListItem({children}) {
  //   const todoItem = props.todoItem;
  return <li key={todoItem.id}>{todoItem.title}</li>;
}

export default TodoListItem;
