import TodoListItem from './TodoListItem';

function TodoList({title}) {
    return (
        <ul>
            <TodoListItem 
                todo={title}
            />
        </ul>
    );
}
export default TodoList;