import TodoListItem from './TodoListItem';

function TodoList({todoItem}) {
  const todos = [
    { id: 1, title: "review resources" },
    { id: 2, title: "take notes" },
    { id: 3, title: "code out app" },
  ];
 
  return (
    <ul>
        {todoItem.map((item) => {
            return (
                <TodoListItem 
                    key={item.id}
                    title={item.todo}
                />
            )
        })}
    </ul>
  )
  
}

export default TodoList;
