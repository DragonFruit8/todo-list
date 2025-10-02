import { useRef, useState } from "react";
import styled from "styled-components";

function TodoForm({ onAddTodo, text }) {
  const todoTitleInput = useRef(null);
  const [workingTodoTitle, setWorkingTodoTitle] = useState("");
  const isDisabled = workingTodoTitle.trim() === "";

  function handleAddTodo(event) {
    event.preventDefault();
    if (workingTodoTitle === "") {
      alert("Please enter TODO Item");
    } else {
      const newTodo = workingTodoTitle.trim();
      onAddTodo(newTodo);
    }
    setWorkingTodoTitle("");
    todoTitleInput.current.focus();
  }
  return (
    <>
      <StyledForm onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Todo</label>
        <input
          id="todoTitle"
          name="title"
          ref={todoTitleInput}
          value={workingTodoTitle}
          onChange={(event) => setWorkingTodoTitle(event.target.value)}
        />
        {
          <button
            className={isDisabled ? "regBtn" : "addTodoItem"}
            disabled={isDisabled}
          >
            {text}
          </button>
        }
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  gap: 0.7rem;
  margin: 1rem 0 0.3rem;

  button.addTodoItem {
    background-color: green;
    transition: 2s all ease-in-out;
  }
  button.addTodoItem:focus {
    outline: 2px yellow solid;
    outline-offset: 4px;
    transition: 100ms all ease-in;
  }
  .regBtn {
    background-color: gray;
    transition: 1s all ease-in-out;
  }
  .regBtn:hover {
    cursor: wait;
    background-color: red;
    transition: 1s all ease-in-out;
  }
`;

export default TodoForm;
