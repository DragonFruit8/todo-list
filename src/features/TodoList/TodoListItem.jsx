import { useEffect, useState } from "react";
import TextInputWithLabel from "../../shared/TextInputWithLabel";

function TodoListItem({ id, title, onCompleteTodo, onUpdateTodo, checked }) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setWorkingTitle] = useState(title);
  
  const handleCancel = () => {
    setWorkingTitle(title);
    setIsEditing(false)
  }


  useEffect(() => {
    setWorkingTitle(title)
  }, [title])

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
    <li>
      <form onSubmit={handleUpdate}>
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
            </label>
            <span onClick={() => setIsEditing(true)}>{workingTitle}</span>
          </>
        )}
      </form>
    </li>
  );
}

export default TodoListItem;