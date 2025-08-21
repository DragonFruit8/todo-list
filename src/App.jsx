import {useState, useEffect} from 'react';
import TodoList from './features/TodoList/TodoList';
import TodoForm from './features/TodoForm';
import './App.css';

function App () {
  const [todoList, setTodoList] = useState ([]);
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
    const token = import.meta.env.VITE_PAT;
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isSaving, setIsSaving] = useState(false);


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
              isComplete: record.fields?.isComplete
            };
            // const check = todoList.find(todo => todo.id === data.id);
            // const completeTodo = todoList.find(todo => todo.id === data.id)
            // if()
            if (data.status != "success") {
              console.log("Status: " + resp.status);
            }
            if(data.isComplete === undefined) {
              data.isComplete = false
            }
            return data;
          })
        );
        // NEED TO VERIFY AND MAKE SURE isComplete (event) is checked
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodos();
  }, [url, token]);


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
  }

const completeTodo = async (id, event) => {
    const todoId = todoList.find((todo) => todo.id === id);
    const todoIsComplete = todoList.map((todo) => {
      if(todo.id === id) {
        todoId.isComplete = event.target.checked
      }
      return todo;
    })
    const payload = {
      records: [
        {
          id: todoId.id,
          fields : {
            isComplete: todoIsComplete.isComplete,
          },
        },
      ],
    };
    const options = {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${token}`,
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
      if(records) {
        console.log(records)
      }
      setTodoList([...todoIsComplete])
    } catch (error) {
      setErrorMessage(error.message);
      setTodoList([...todoIsComplete])
    } finally {
      setIsSaving(false);
    }
  };

  const updateTodo = async (id, editedTodo) => {
    const originalTodo = todoList.find((todo) => todo.id === id);
    originalTodo.title = editedTodo;
    const payload = {
      records: [
        {
          id: originalTodo.id,
          fields: {
            title: editedTodo,
            isComplete: originalTodo.isComplete
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
      if(records) {
        console.log("Data Updated successfully")
      }
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
        onCompleteTodo={completeTodo}
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