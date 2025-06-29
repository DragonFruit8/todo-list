
function TodoListItem({todoItem = []}) {
    const todoItem = props.todoItem;
    return (
        <li>
            {props.title}
        </li>
    );
};

export default TodoListItem;