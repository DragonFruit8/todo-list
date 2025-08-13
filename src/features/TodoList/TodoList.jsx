import TodoListItem from './TodoListItem';


function TodoList({todoList, onUpdateTodo, onCompleteTodo}) {
  const filteredTodoList = todoList.filter (todo => !todo.isComplete);

  return (
    <ul>
      {filteredTodoList.length > 0
        ? filteredTodoList.map (item => {
            return (
              <TodoListItem
                key={item.id}
                title={item.title}
                checked={item.isComplete}
                onUpdateTodo={(title) => onUpdateTodo(item.id, title)}
                onCompleteTodo={() => onCompleteTodo (item.id)}
              />
            );
          })
        : <p>Add todo above to get started</p>}
    </ul>
  );
}
export default TodoList;
