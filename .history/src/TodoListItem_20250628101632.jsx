
function TodoListItem({todoItem = []}) {
    // const todoItem = props.todoItem;
    return (
        <ul>
            {todoItem.map((item) => {
                return (
                    <li key={item.id}
                )
            })}
        </ul>
    );
};

export default TodoListItem;