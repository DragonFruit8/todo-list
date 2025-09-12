import { useRef, useState } from "react";

function TodoForm({ onAddTodo, text }) {
  const todoTitleInput = useRef(null);
  const [workingTodoTitle, setWorkingTodoTitle] = useState("");
  const isDisabled = workingTodoTitle.trim() === "";

  function handleAddTodo(event) {
    event.preventDefault();
    // 1st Input Submit Defense
    if (workingTodoTitle === "") {
      alert("Please enter TODO Item");
    } else {
      // 2nd Input Submit Defense (Takes spaces out IF entered character after " " ...)
      const newTodo = workingTodoTitle.trim();
      onAddTodo(newTodo);
    }
    setWorkingTodoTitle("");
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
          onChange={(event) => setWorkingTodoTitle(event.target.value)}
        />
        {<button disabled={isDisabled}>{text}</button>}
      </form>
    </>
  );
}
export default TodoForm;