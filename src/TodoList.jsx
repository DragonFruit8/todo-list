import TodoListItem from './TodoListItem';
import './todo.css';

function TodoList({todoList}) {
  const filteredTodoList = todoList.filter (todo => todo.isCompleted == false);
  return (
    <ul>
      {filteredTodoList.length > 0
        ? filteredTodoList.map (item => (
            <TodoListItem key={item.id} title={item.title} onCompletedTodo={item.isCompleted}  />
          ))
        : <p>No Tasks</p>}
    </ul>
  );
}
export default TodoList;
