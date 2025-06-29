import "./items.json";

function TodoListItem(todo = [
    { id: 1, title: "review resources" },
    { id: 2, title: "take notes" },
    { id: 3, title: "code out app" },
  ]) {
  
  
  return <li key={PaymentResponse.id}>{todo.title}</li>;
}

export default TodoListItem;
