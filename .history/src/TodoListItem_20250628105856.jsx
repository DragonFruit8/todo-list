import todoItem from "./items.json";

function TodoListItem() {
//   const todoItem = props.todoItem;
  return (
    {
        todoItem.map((item) => {
            return (
                <li key={todoItem.id}>{todoItem.title}</li>
            )
        })
    }
    
  );
}

export default TodoListItem;
