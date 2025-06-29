import TodoListItem from "./TodoListItem";

function TodoList({ todo }) {
    todo = [
  {  id: 1,title: 'Cabbage' },
  {  id: 1,title: 'Cabbage' },
  {  id: 1,title: 'Cabbage' }
];
  return (
    <ul>
      <TodoListItem todo={todo} />
    </ul>
  );
}
export default TodoList;
