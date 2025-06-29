import "./items.json";

function TodoListItem() {

  const todo = [
    {
      "id": 1,
      "title": "review resources"
    },
    { 
        "id": 2, 
        "title": "take notes" },
    { 
        "id": 3, 
        "title": "code out app" 
      }
  ]
  
  return (
    {todo.map((item))}
  );
}

export default TodoListItem;
