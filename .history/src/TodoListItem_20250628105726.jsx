import "./items.json";
function TodoListItem(todoItem) {
//   const todoItem = props.todoItem;
  return (
    {
        TodoListItem.map((item) => {
            <li key={todoItem.id}>{todoItem.title}</li>
        })
    }
    
  );
}

export default TodoListItem;
