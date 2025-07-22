import { useRef, useState } from "react";
import TextInputWithLabel from "../shared/TextInputWithLabel";

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
      <form onSubmit={handleAddTodo}>
        <TextInputWithLabel
          elementId="todoTitle"
          labelText="Todo"
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
