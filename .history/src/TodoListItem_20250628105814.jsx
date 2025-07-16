import "./items.json";

function TodoListItem({id, }) {
//   const todoItem = props.todoItem;
  return (
    {
        TodoListItem.map((item) => {
            return (
                <li key={todoItem.id}>{todoItem.title}</li>
            )
        })
    }
    
  );
}

export default TodoListItem;
