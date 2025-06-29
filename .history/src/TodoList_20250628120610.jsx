import TodoListItem from './TodoListItem';

function TodoList() {
    return (
        <ul>
            <TodoListItem 
                todo={todo}
            />
        </ul>
    );
}
export default TodoList;