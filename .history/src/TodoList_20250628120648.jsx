import TodoListItem from './TodoListItem';

function TodoList({id, title}) {
    return (
        <ul>
            <TodoListItem 
                key={id}
                todo={title}
            />
        </ul>
    );
}
export default TodoList;