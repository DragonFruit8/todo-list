
function TodoListItem({todoItem = []}) {
    // const todoItem = props.todoItem;
    return (
        <ul>
            {todoItem.map((item) => {
                return (
                    <li key={item.id}>
                        {item.title}
                    </li>
                )
            })}
        </ul>
    );
};

export default TodoListItem;