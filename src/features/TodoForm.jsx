import { useRef, useState } from "react";
import TextInputWithLabel from "../shared/TextInputWithLabel";

function TodoForm({ onAddTodo }) {
  const todoTitleInput = useRef(null);
  const [workingTodoTitle, setWorkingTodoTitle] = useState("");
  const isDisabled = workingTodoTitle.trim() === "";

  function handleAddTodo(event) {
    event.preventDefault();
    // 1st Input Submit Defense
    if (workingTodoTitle === "") {
      alert("Please enter TODO Item");
      return;
    } else {
      // 2nd Input Submit Defense (Takes spaces out IF entered character after " " ...)
      onAddTodo(workingTodoTitle.trim());
    }
    setWorkingTodoTitle("");
    todoTitleInput.current.focus();
  }
  return (
    <>
      <form onSubmit={handleAddTodo}>
      <TextInputWithLabel 
        id="todoTitle"
        name="title"
        ref={todoTitleInput}
        value={workingTodoTitle}
        onChange={(event) => setWorkingTodoTitle(event.target.value)}
      />
        <button disabled={isDisabled}>Add Todo</button>
      </form>
    </>
  );
}
export default TodoForm;