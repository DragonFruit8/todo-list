import TodoListItem from './TodoListItem';

function TodoList({id, title}) {
    return (
        <ul>
            <TodoListItem 
                key={}
                todo={title}
            />
        </ul>
    );
}
export default TodoList;