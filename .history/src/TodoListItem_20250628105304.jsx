import './items.json'
function TodoListItem({todoItem}) {

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