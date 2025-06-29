import todoItem from './items.json'
function TodoListItem({}) {

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