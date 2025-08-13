import { useState } from "react";
import TextInputWithLabel from "../../shared/TextInputWithLabel";
function TodoListItem({ id, title, onCompleteTodo, onUpdateTodo, isComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setWorkingTitle] = useState(title);
  

  const handleCancel = () => {
    setWorkingTitle(title);
    setIsEditing(false);
  };

  const handleEdit = (event) => {
    setWorkingTitle(event.target.value);
  };

  function handleUpdate(event) {
    if (!isEditing) {
      return;
    }
    event.preventDefault();
    onUpdateTodo({ id, title: workingTitle });
    setIsEditing(false);
  }

  return (
    <li>
      <form onSubmit={handleUpdate}>
        {isEditing ? (
          <>
            <TextInputWithLabel onChange={handleEdit} value={workingTitle} />
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="button" onClick={handleUpdate}>
              Update
            </button>
          </>
        ) : (
          <>
            <label>
              <input
                type="checkbox"
                id={`checkbox${id}`}
                checked={isComplete}
                onChange={() => onCompleteTodo(id)}
              />
            </label>
            <span onClick={() => setIsEditing(true)}>{workingTitle}</span>
          </>
        )}
      </form>
    </li>
  );
}

export default TodoListItem;
