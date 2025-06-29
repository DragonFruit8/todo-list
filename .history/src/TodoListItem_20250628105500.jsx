import './items.json'
function TodoListItem(props) {
    const todoItem = props.todoItem;
    return (
        <>
            
                return (
                    <li key={item.id}>
                        {item.title}
                    </li>
                )
            
        </>
    );
};

export default TodoListItem;