function TodoForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <label htmlFor="todoTitle">Todo</label>
      <form onSubmit={handleSubmit}>
        <input id="todoTitle" />
        <button>Add Todo</button>
      </form>
    </>
  );
}
export default TodoForm;
