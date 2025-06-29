
function TodoListItem({items}) {

    return (
        <>
            {todoItem.map((item) => {
                return (
                    <li key={item.id}>
                        {item.title}
                    </li>
                )
            })}
        </>
    );
};

export default TodoListItem;