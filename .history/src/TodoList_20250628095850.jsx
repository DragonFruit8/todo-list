import TodoListItem from './TodoListItem';

function TodoList() {
  const todos = [
    { id: 1, title: "review resources" },
    { id: 2, title: "take notes" },
    { id: 3, title: "code out app" },
  ];
 
  return (
    <ul>
        {TodoListItem.map((item) => {
            return (
                <li key={item.id}>
                    
                </li>
            )
        })}
    </ul>
  )
  
}

export default TodoList;
