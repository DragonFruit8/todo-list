import TodoListItem from './TodoListItem';

function TodoList({todo}) {
//   const todos = [
//     { id: 1, title: "review resources" },
//     { id: 2, title: "take notes" },
//     { id: 3, title: "code out app" },
//   ];
 
  return (
    <ul>
        {todo.map((item) => {
            return (
                <TodoListItem 
                    key={item.id}
                    title={}
                />
            )
        })}
    </ul>
  )
  
}

export default TodoList;
