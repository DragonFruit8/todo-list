import TodoListItem from "./TodoListItem";

function TodoList({ todo }) {
    todo = [
  {  id: 1,title: "review resources" },
  {  id: 1,title: "take notes" },
  {  id: 1,title: "code out app" }
];
  return (
    <ul>
      <TodoListItem todo={todo} />
    </ul>
  );
}
export default TodoList;
