

function TodoForm() {
  return (
    <label> Todo
    <form htmlFor='todoTitle'>
      <input id="todoTitle" />
      <button className='button'>Add todo</button>
    </form>
    </label>
  )
}
export default TodoForm;