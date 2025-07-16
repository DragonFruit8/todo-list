import TodoListItem from "./TodoListItem";

function TodoList({ todo }) {
    todo = [
  { title: 'Cabbage', },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];
  return (
    <ul>
      <TodoListItem todo={todo} />
    </ul>
  );
}
export default TodoList;
