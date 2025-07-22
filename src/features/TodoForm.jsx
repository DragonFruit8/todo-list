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
      <label htmlFor="todoTitle">Todo</label>
      <form onSubmit={handleAddTodo}>
        <input
          id="todoTitle"
          name="title"
          ref={todoTitleInput}
          value={workingTodoTitle}
          onChange={(event) => setworkingTodoTitle(event.target.value)}
        />
        <button disabled={isDisabled}>Add Todo</button>
      </form>
    </>
  );
}
export default TodoForm;
