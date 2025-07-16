import TodoListItem from './TodoListItem';

function TodoList({todo}) {
    return (
        <ul>
            <TodoListItem 
                ke
                todo={todo}
            />
        </ul>
    );
}
export default TodoList;