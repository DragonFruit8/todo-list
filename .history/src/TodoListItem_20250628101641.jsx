
function TodoListItem({todoItem = []}) {
    // const todoItem = props.todoItem;
    return (
        <ul>
            {todoItem.map((item) => {
                return (
                    <li key={item.id}>
                        {item}
                    </li>
                )
            })}
        </ul>
    );
};

export default TodoListItem;