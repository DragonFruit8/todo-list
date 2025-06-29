import './items.json'
function TodoListItem(props) {
    const todoItem = props.todoItem;
    return (
        <>
            
            
                    <li key={todoItem.id}>
                        {item.title}
                    </li>
            
            
        </>
    );
};

export default TodoListItem;