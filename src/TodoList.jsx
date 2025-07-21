import TodoListItem from './TodoListItem';
import todos from './todolist.json';

function TodoList () {
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
