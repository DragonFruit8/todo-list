import TodoListItem from "./TodoListItem";

function TodoList({ todo }) {
  return (
    <ul>
      
        return (
            <ul>
                <TodoListItem key={todo.id} todo={todo.title} />
            </ul>
            )
      
    </ul>
  );
}
export default TodoList;
