import TodoListItem from "./TodoListItem";

function TodoList({ todo }) {
    todo = [
  {  id: 1,title: 'Cabbage' },
  {  id: 1,title: 'Cabbage' },
  {  id: 1,title: 'Cabbage' },
  { title: 'Garlic', isFruit: false, id: 2 }
];
  return (
    <ul>
      <TodoListItem todo={todo} />
    </ul>
  );
}
export default TodoList;
