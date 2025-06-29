import TodoListItem from './TodoListItem';

function TodoList({id, todo}) {
    return (
        <ul>
            <TodoListItem 
                id={id}
                todo={todo}
            />
        </ul>
    );
}
export default TodoList;