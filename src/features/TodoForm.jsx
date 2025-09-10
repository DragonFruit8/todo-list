import { useRef, useState } from "react";
import TextInputWithLabel from "../shared/TextInputWithLabel";

function TodoForm({ onAddTodo, text }) {
  const todoTitleInput = useRef(document.querySelector("#todoTitle"));
  const [workingTodoTitle, setworkingTodoTitle] = useState("");
  const isDisabled = workingTodoTitle.trim() === "";

  function handleAddTodo(event) {
    event.preventDefault();
    // 1st Input Submit Defense
    if (workingTodoTitle === "") {
      alert("Please enter TODO Item");
      return;
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
      <form onSubmit={handleAddTodo}>
        <input
          id="todoTitle"
          name="title"
          ref={todoTitleInput}
          value={workingTodoTitle}
          onChange={(event) => setworkingTodoTitle(event.target.value)}
        />
        {<button disabled={isDisabled}>{text}</button>}
      </form>
    </>
  );
}
export default TodoForm;