import TodoListItem from './TodoListItem';

function TodoList({id, title}) {
    return (
        <ul>
            <TodoListItem 
                todo={title}
            />
        </ul>
    );
}
export default TodoList;