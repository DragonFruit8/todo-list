import TodoListItem from './TodoListItem';

function TodoList({todo}) {
    return (
        <ul>
            {todo.map((todo) => {
                return ()
            })}
        </ul>
    );
}
export default TodoList;