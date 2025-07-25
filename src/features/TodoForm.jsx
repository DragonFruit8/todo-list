import { useRef, useState } from "react";

function TodoForm({ onAddTodo }) {
  const todoTitleInput = useRef(document.querySelector("#todoTitle"));
  const [workingTodoTitle, setworkingTodoTitle] = useState("");
  const isDisabled = workingTodoTitle.trim() === "";

  function handleAddTodo(event) {
    event.preventDefault();
    // 1st Input Submit Defense
    if (workingTodoTitle === "") {
      alert("Please enter TODO Item");
    } else {
      // 2nd Input Submit Defense (Takes spaces out IF entered character after " " ...)
      onAddTodo(workingTodoTitle.trim());
    }
    setworkingTodoTitle("");
    todoTitleInput.current.focus();
  }
  return (
    <>
      <label htmlFor="todoTitle" className="p-2 ps-3 fs-5">Todo</label>
      <form onSubmit={handleAddTodo} className="p-2">
        <input
          id="todoTitle"
          name="title"
          ref={todoTitleInput}
          value={workingTodoTitle}
          onChange={(event) => setworkingTodoTitle(event.target.value)}
          className={isDisabled ? 'p-1' : 'p-2'}
        />
        <button disabled={isDisabled}>Add Todo</button>
      </form>
    </>
  );
}
export default TodoForm;
