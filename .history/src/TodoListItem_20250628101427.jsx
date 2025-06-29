
function TodoListItem({todoItem = []}) {
    const todoItem = props.title;
    return (
        <li>
            {props.title}
        </li>
    );
};

export default TodoListItem;