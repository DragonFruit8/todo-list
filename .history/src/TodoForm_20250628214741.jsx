function TodoForm() {
  return (
    <>
      <label id="todo">Todo</label>
      <form htmlFor="todoTitle">
        <input id="todoTitle" />
        <button>Add Todo</button>
      </form>
    </>
  );
}
export default TodoForm;
