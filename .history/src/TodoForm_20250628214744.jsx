function TodoForm() {
  return (
    <>
      <label id="todoTitle">Todo</label>
      <form htmlFor="todoTitle">
        <input id="todoTitle" />
        <button>Add Todo</button>
      </form>
    </>
  );
}
export default TodoForm;
