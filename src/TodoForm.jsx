function TodoForm() {
  return (
    <>
      <label htmlFor="todoTitle">Todo</label>
      <form>
        <input type="text" id="todoTitle" />
        <button>Add Todo</button>
      </form>
    </>
  );
}
export default TodoForm;
