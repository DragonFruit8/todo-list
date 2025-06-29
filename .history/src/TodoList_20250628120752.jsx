import TodoListItem from './TodoListItem';

function TodoList({id, title}) {
    return (
        <ul>
            <TodoListItem 
                id={id}
                todo={title}
            />
        </ul>
    );
}
export default TodoList;