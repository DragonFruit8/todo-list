import { useState, useEffect } from "react";
import TodoList from "./features/TodoList/TodoList";
import TodoForm from "./features/TodoForm";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const url = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${
    import.meta.env.VITE_TABLE_NAME
  }`;
  const token = import.meta.env.VITE_PAT;
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function addTodo(title) {
    const newTodo = {
      id: Date.now(),
      title,
      isComplete: false,
    };
    setTodoList([...todoList, newTodo]);
  }

  function completeTodo(id) {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: true };
      }
      return todo;
    });
    setTodoList(updatedTodos);
  }

  function updateTodo(editedTodo) {
    const updatedTodo = todoList.map((todo) => {
      if (todo.title !== editedTodo) {
        return {
          id: todo.id,
          title: editedTodo,
          isComplete: todo.isComplete,
        };
      }
      return editedTodo;
    });

    setTodoList(updatedTodo);
  }

  useEffect(() => {
    const options = {
      method: "GET",
      body: JSON.stringify(),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const fetchTodos = async () => {
      try {
        setIsLoading(true);
        const resp = await fetch(url, options);
        if (!resp.ok) {
          setErrorMessage("Error: " + resp.status);
          throw new Error(resp.status);
        }
        const { records } = await resp.json();
        if (records.status != "success") {
          setErrorMessage(resp.status);
          
        }
        setTodoList(
          records.map((record) => {
            const fetchedTodoList = {
              id: record.id,
              ...record.fields,
            };
            return fetchedTodoList;
          })
        );
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodos();
  }, [url, token]);

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todoList={todoList}
        isLoading={isLoading}
        onUpdateTodo={updateTodo}
        onCompleteTodo={completeTodo}
      />
      {errorMessage ? (<hr /> ): (<p>{errorMessage}</p>)}
    </div>
  );
}

export default App;
