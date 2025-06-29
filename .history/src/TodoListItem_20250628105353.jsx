import todoItem from './items.json'
function TodoListItem(props) {
    const todoItem = props.todoItem;
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