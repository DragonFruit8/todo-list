import TodoListItem from './TodoListItem';

function TodoList({id, todo}) {
    return (
        <ul>
            <TodoListItem 
                
                todo={todo}
            />
        </ul>
    );
}
export default TodoList;