import { useEffect, useState } from "react";
import TextInputWithLabel from "../../shared/TextInputWithLabel";
import styled from "styled-components";

function TodoListItem({ id, title, onCompleteTodo, onUpdateTodo, checked }) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setWorkingTitle] = useState(title);

  const handleCancel = () => {
    setWorkingTitle(title);
    setIsEditing(false);
  };

  useEffect(() => {
    setWorkingTitle(title);
  }, [title]);

  const handleEdit = (event) => {
    setWorkingTitle(event.target.value);
  };

  const handleUpdate = (event) => {
    if (!isEditing) {
      return;
    }
    event.preventDefault();
    onUpdateTodo(workingTitle);
    setIsEditing(false);
  };

  return (
    <StyledList>
      <Form onSubmit={handleUpdate}>
        {isEditing ? (
          <>
            <TextInputWithLabel value={workingTitle} onChange={handleEdit} />
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" onClick={handleUpdate}>
              Update
            </button>
          </>
        ) : (
          <>
            <label>
              <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onCompleteTodo}
              />
              <span onClick={() => setIsEditing(true)}>{workingTitle}</span>
            </label>
          </>
        )}
      </Form>
    </StyledList>
  );
}

const Form = styled.form`
  margin: 0.4rem 0;
  span {
    margin-left: 1rem;
    padding: 0;
  }
  input[type="checkbox"]:checked + span {
    color: red;
    text-decoration: line-through;
    opacity: 0.6;
  }
`;

const StyledList = styled.li`
  button[type="submit"] {
    background-color: green;
  }
  button[type="button"] {
    background-color: red;
  }
`;

export default TodoListItem;
