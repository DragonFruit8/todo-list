// import todoItem from './items.json';

function TodoListItem() {
 
  return todos.map((todo) => <li key={todo.id}>{todo.title}</li>);
}

export default TodoListItem;