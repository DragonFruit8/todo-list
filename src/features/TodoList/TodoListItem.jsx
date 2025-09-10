import { useEffect, useState } from "react";
import TextInputWithLabel from "../../shared/TextInputWithLabel";
import styled from "styled-components";

function TodoListItem({ id, title, onCompleteTodo, onUpdateTodo, onDeleteTodo, checked }) {
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

  const handleDelete = () => {
    onDeleteTodo(id);
    setIsEditing(false);
  }

  return (
    <StyledList>
      <Form onSubmit={handleUpdate}>
        {isEditing ? (
          <>
          <div>
            <a onClick={handleDelete}> X </a>
          </div>
            <TextInputWithLabel value={workingTitle} onChange={handleEdit} />
            <div>
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
              <button type="submit" onClick={handleUpdate}>
                Update
              </button>
            </div>
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
  label {
      flex-grow: 4;
      input[type="text"] {
        width:100%;
      }
    }
    div{
      button[type="button"]:hover {
          color: black;
      }
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        font-size: 20px;
        scale: 1;
        transform: rotateZ(0deg);
        transition: all 800ms ease-in-out;
      }
      a:hover {
        color: red;
        cursor: pointer;
        scale: 1.5;
        transform: rotateZ(180deg);
        transition: all 800ms ease-in-out;
      }
    }
`;

const StyledList = styled.li`
div {
  display: flex;
  flex-grow: 2;
}
  button[type="submit"] {
    
    background-color: green;
  }
  button[type="button"] {
    
    background-color: red;
  }
`;

// const StyledDiv = styled.div`
    
//     flex: 1;
// `;
export default TodoListItem;
