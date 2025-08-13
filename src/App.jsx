import { useState, useEffect } from "react";
import TodoList from "./features/TodoList/TodoList";
import TodoForm from "./features/TodoForm";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const url = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${
    import.meta.env.VITE_TABLE_NAME
  }`;
  // const postURL = `https://api.airtable.com/v0/${
  //   import.meta.env.VITE_BASE_ID
  // }/${import.meta.env.VITE_TABLE_NAME}/listRecords`;
  const token = import.meta.env.VITE_PAT;
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  
  const addTodo = async (newTodo) => {
    const payload = {
      records: [
        {
          fields: {
            title: newTodo,
            isComplete: false,
          },
        },
      ],
    };
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    try {
      setIsSaving(true);
      console.log(payload);
      const resp = await fetch(url, options);
      if (!resp.ok) {
        throw new Error("Data failed to be post");
      }
      const { records } = await resp.json();
      const savedTodo = {
        id: records[0].id,
        title: payload.records[0].fields.title,
      };
      if (!records[0].fields.isComplete) {
        savedTodo.isComplete = false;
      }
      setTodoList([...todoList, savedTodo]);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSaving(false);
    }
  };

  const completeTodo = async (id) => {
    const todoId = todoList.find((todo) => todo.id === id);
    console.log("Sending....")
   const payload = {
      records: [
        {
          id: todoId.id,
          fields : {
            isComplete: todoId.isComplete,
          },
        },
      ],
    };
    const options = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    try {
      setIsSaving(true);
      const resp = await fetch(url, options);
      if (!resp.ok) {
        throw new Error("Data failed to be post");
      }
      // const { records } = await resp.json();
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSaving(false);
    }
  };

  const updateTodo = async (id, editedTodo) => {
    const originalTodo = todoList.find((todo) => todo.id === id);
    const payload = {
      records: [
        {
          id: originalTodo.id,
          fields: {
            title: editedTodo.title,
          },
        },
      ],
    };

    const options = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    try {
      setIsSaving(true);
      const resp = await fetch(url, options);
      if (!resp.ok) {
        throw new Error("Data failed to be post");
      }
      const { records } = await resp.json();
      records.push(todoList);
    } catch (error) {
      console.error(error.message);
      const revertedTodos = {
        id: originalTodo.id,
        title: originalTodo.title,
      };
      setErrorMessage(`${error.message}. Reverting todo...`);
      setTodoList([...revertedTodos]);
    } finally {
      setIsSaving(false);
    }
  };

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
        setTodoList(
          records.map((record) => {
            const data = {
              id: record.id,
              title: record.fields.title,
            };
            if (data.status != "success") {
              console.log("Status: " + resp.status);
            }
            return data;
          })
        );
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodos();
  }, [url, token]);

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm
        onAddTodo={addTodo}
        text={isSaving ? "Saving..." : "Add Todo"}
      />
      <TodoList
        todoList={todoList}
        isLoading={isLoading}
        onUpdateTodo={updateTodo}
        onCompleteTodo={(event) => completeTodo(event)}
      />
      {errorMessage !== "" ? (
        <div>
          <hr />
          <button className="close" onClick={() => setErrorMessage("")}>
            X
          </button>
          <p>{errorMessage}</p>
        </div>
      ) : (
        <hr />
      )}
    </div>
  );
}

export default App;
