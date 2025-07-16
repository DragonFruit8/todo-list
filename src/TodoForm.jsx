function TodoForm() {
  return (
    <>
      <label for="todoTitle">Todo</label>
      <form htmlFor="todoTitle">
        <input id="todoTitle" />
      <label htmlFor="todoTitle">Todo</label>
      <form>
        <input type="text" id="todoTitle" />
        <button>Add Todo</button>
      </form>
    </>
  );
}
export default TodoForm;
