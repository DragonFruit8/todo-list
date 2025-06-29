import todoItem from './items.json'
function TodoListItem(props) {
    const todoItem = props
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