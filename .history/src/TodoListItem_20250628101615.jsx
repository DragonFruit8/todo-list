
function TodoListItem({todoItem = []}) {
    // const todoItem = props.todoItem;
    return (
        <ul>
            {todoItem.map((item))}
        </ul>
    );
};

export default TodoListItem;