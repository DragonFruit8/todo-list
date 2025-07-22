import { useRef } from 'react';

function TodoForm({onAddTodo}) {
  const todoTitleInput = useRef(document.querySelector('#todoTitle'));
  function handleAddTodo(event){
    event.preventDefault()
    const title = event.target.title.value;
    onAddTodo(title)
    event.target.title.value = ""; 
    todoTitleInput.current.focus();
  }
  return (
    <>
      <label htmlFor="todoTitle">Todo</label>
      <form onSubmit={handleAddTodo}>
        <input id="todoTitle" name="title" ref={todoTitleInput}/>
        <button>Add Todo</button>
      </form>
    </>
  );
}
export default TodoForm;