import { useState } from 'react';
import TextInputWithLabel from '../../shared/TextInputWithLabel';

function TodoListItem({id, title, onCompleteTodo, isCompleted, onUpdateTodo}) {
const [ isEditing, setIsEditing ] = useState(false);
const [ workingTitle, setWorkingTitle ] = useState(title);

const handleCancel = () => {
  setWorkingTitle(title);
  setIsEditing(false);
}

const handleEdit = (event) => {
  setWorkingTitle(event.target.value);
}

function handleUpdate(event){
  console.log("BEFORE: ",{title: workingTitle, workingTitle})
  if(!isEditing) {
    return;
  }
  event.preventDefault();
  setWorkingTitle(event.target.value)
  onUpdateTodo({title: workingTitle})  
  // Not sure how the object is NOT setting state in {title} variable to show in the prop title [TodoList.jsx]
  // Unless useEffect is supposed to be utilized to re-render after todo.title .filter() in todoList Array [TodoList.jsx]
  console.log("AFTER: ",{title: workingTitle, workingTitle})
  setIsEditing(false);
}

  return (
    <li>
      <form onSubmit={handleUpdate}>
      {isEditing ? (
        <>
        <TextInputWithLabel 
          onChange={handleEdit}
          value={workingTitle}
        /> 
        <button 
          type="button" 
          onClick={handleCancel}>
          Cancel
          </button>
        <button 
          type="button" 
          onClick={handleUpdate}
          >
          Update
        </button>
        </>
      ) : (
        <>
        <label>
        <input
          type="checkbox"
          id={`checkbox${id}`}
          checked={isCompleted}
          onChange={() => onCompleteTodo(id)}
        />
        </label>
        <span onClick={() => setIsEditing(true)}>
        {/* Hook State Changes to {WorkingTitle} YET, TodoListItem instance [TodoList.jsx] title={todo.title} remains the same  */}
        {/* Changing the title => workingTitle DOES NOT solve the problem of state being unused in todoListItem instance */}
          {title}
        </span>
        </>
      )}
      </form>
    </li>
  );
}

export default TodoListItem;
