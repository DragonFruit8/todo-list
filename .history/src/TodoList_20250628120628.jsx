import TodoListItem from './TodoListItem';

function TodoList() {
    return (
        <ul>
            <TodoListItem 
                todo={title}
            />
        </ul>
    );
}
export default TodoList;