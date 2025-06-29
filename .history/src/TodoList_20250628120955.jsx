import TodoListItem from './TodoListItem';

function TodoList({todo}) {
    return (
        <ul>
            <TodoListItem 
                key={todo.id}
                todo={todo}
            />
        </ul>
    );
}
export default TodoList;