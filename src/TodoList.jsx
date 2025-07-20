import TodoListItem from './TodoListItem';
import todos from './todolist.json';

function TodoList () {
  // Mentor requested for me to list todo items from JSON file
  const todo = todos.todo.map (item => {
    return <TodoListItem key={item.id} title={item.item} />;
  });
  return (
    <ul>
      {todo}
    </ul>
  );
}
export default TodoList;
