function TodoForm() {
  return (
    <>
      <label>
        Todo
        <form htmlFor="todoTitle">
          
          <input id="todoTitle" />
          <button>Add Todo</button>
        </form>
      </label>
    </>
  );
}
export default TodoForm;
