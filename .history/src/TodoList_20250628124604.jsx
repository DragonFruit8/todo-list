import TodoListItem from './TodoListItem';

function TodoList({todo}) {
    return (
        <ul>
            <TodoListItem 
                key={todo}
                todo={todo}
            />
        </ul>
    );
}
export default TodoList;