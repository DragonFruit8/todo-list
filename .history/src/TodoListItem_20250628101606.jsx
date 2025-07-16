
function TodoListItem({todoItem = []}) {
    // const todoItem = props.todoItem;
    return (
        <ul>
            {todoItem.map()}
        </ul>
    );
};

export default TodoListItem;