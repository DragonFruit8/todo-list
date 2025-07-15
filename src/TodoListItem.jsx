// import { useState } from "react";

function TodoListItem({title, checked, onChange}) {
  
  return (
    <li>
      <form>
        <input 
          type="checkbox" 
          checked={checked}
          onChange={onChange}
        />
        {title}
      </form>
    </li>
  );
}

export default TodoListItem;
