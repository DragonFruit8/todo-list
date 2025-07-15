import { useRef, useState } from 'react';

function TodoForm({onAddTodo}) {
  const todoTitleInput = useRef(document.querySelector('#todoTitle'));
  const [workingTodoTitle , setworkingTodoTitle ] = useState("");
  
  function handleAddTodo(event){
    event.preventDefault()
    
    onAddTodo(workingTodoTitle);
    setworkingTodoTitle('')
    
    todoTitleInput.current.focus();
  }
  return (
    <>
      <label htmlFor="todoTitle">Todo</label>
      <form onSubmit={handleAddTodo}>
        <input 
            id="todoTitle" 
            name="title" 
            ref={todoTitleInput}
            value={workingTodoTitle}
            onChange={(event) => 
            setworkingTodoTitle(event.target.value)}
          />
        <button disabled={workingTodoTitle == ""}>Add Todo</button>
      </form>
    </>
  );
}
export default TodoForm;
