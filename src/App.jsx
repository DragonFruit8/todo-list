import { useState, useEffect, useCallback, useMemo } from "react";
import TodoList from "./features/TodoList/TodoList";
import TodoForm from "./features/TodoForm";
import TodosViewForm from "./features/TodosViewForm";
import styled from 'styled-components'
import "./App.module.css";
import TodoLogo from "./assets/favicon.ico";

function App() {
  const [todoList, setTodoList] = useState([]);
  const url = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${
    import.meta.env.VITE_TABLE_NAME
  }`;
  const token = import.meta.env.VITE_PAT;
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [sortField, setSortField] = useState("createdTime");
  const [sortDirection, setSortDirection] = useState("asc");
  const [queryString, setQueryString] = useState("");
  const todoMemo = useMemo(() => todoList, [todoList]);

  const encodeUrl = useCallback(
    ({ sortDirection, sortField, queryString }) => {
      let searchQuery = "";
      let sortQuery = `sort[0][field]=${sortField}&sort[0][direction]=${sortDirection}`;
      if (queryString) {
        searchQuery = `&filterByFormula=SEARCH("${queryString}",+title)`;
      }
      return encodeURI(`${url}?${sortQuery}${searchQuery}`);
    },
    [url]
  );

  useEffect(() => {
    const options = {
      method: "GET",
      body: JSON.stringify(),
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    };
    const fetchTodos = async () => {
      try {
        setIsLoading(true);
        const resp = await fetch(
          encodeUrl({ queryString, sortDirection, sortField }),
          options
        );
        if (!resp.ok) {
          throw new Error(resp.status);
        }
        const { records } = await resp.json();
        setTodoList(
          records.map((record) => {
            const data = {
              createdTime: record.createdTime,
              id: record.id,
              title: record.fields.title,
              isComplete: record.fields?.isComplete,
            };
            if (data.isComplete === undefined) {
              data.isComplete = false;
            }
            return data;
          })
        );
      } catch (error) {
        if (error.status === 401) {
          setErrorMessage("‼️" + "Authorization Required" + "‼️")
        }
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodos();
  }, [encodeUrl, queryString, sortDirection, sortField, token]);

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
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    try {
      setIsSaving(true);
      const resp = await fetch(
        encodeUrl({ queryString, sortDirection, sortField }),
        options
      );
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
      console.log(
        `"${savedTodo.title}" Saved in Database\n${
          savedTodo.isComplete ? "And IS CHECKED" : ""
        }`
      );

      setTodoList([...todoMemo, savedTodo]);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSaving(false);
    }
  };

  const completeTodo = async (id, event) => {
    const todoId = todoMemo.find((todo) => todo.id === id);
    const todoIsComplete = todoList.map((todo) => todo.id === id ? { ...todo, isComplete: event.target.checked } : todo);
    const payload = {
      records: [
        {
          id: todoId.id,
          fields: {
            isComplete: event.target.checked,
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
      const resp = await fetch(
        encodeUrl({ queryString, sortDirection, sortField }),
        options
      );
      if (!resp.ok) {
        throw new Error("Data failed to be post");
      }
      const { records } = await resp.json();
      if (records[0].fields.isComplete) {
        console.log(`${records[0].fields.title} is CHECKED in the Database`);
      } else if (!records[0].fields.isComplete) {
        console.log(`${records[0].fields.title} is UNCHECKED in the Database`);
      }
      setTodoList([...todoIsComplete]);
    } catch (error) {
      setErrorMessage(error.message);
      setTodoList([...todoIsComplete]);
    } finally {
      setIsSaving(false);
    }
  };

  const updateTodo = async (id, editedTodo) => {
    const originalTodo = todoMemo.find((todo) => todo.id === id);
    const updateTodo = { ...originalTodo, title: editedTodo, isComplete: false};
    const payload = {
      records: [
        {
          id: originalTodo.id,
          fields: {
            title: editedTodo,
            isComplete: originalTodo.isComplete,
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
      const resp = await fetch(
        encodeUrl({ queryString, sortDirection, sortField }),
        options
      );
      if (!resp.ok) {
        throw new Error("Data failed to be post");
      }
      const { records } = await resp.json();
      if (records[0].fields.title) {
        console.log(
          `Item ID: ${records[0].id} \n Title Changed to: ${records[0].fields.title}`
        );
      }
      setTodoList(todoList.map(todo => todo.id === id ? updateTodo : todo));
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
    <main>
      <h1>
        <span>
          <img src={TodoLogo} alt="Terra'Novare logo" />
        </span>
        My Todos
      </h1>
      <TodoForm
        onAddTodo={addTodo}
        text={isSaving ? "Saving..." : <span>Add Todo</span>}
      />
      {todoMemo === 0 ? (
        <p>Add Todo Item...</p>
      ) : (
        <TodoList
          todoList={todoMemo}
          isLoading={isLoading}
          onUpdateTodo={updateTodo}
          onCompleteTodo={completeTodo}
        />
      )}
      {errorMessage !== "" ? (
        <StyledMessage>
          <hr />
          <button onClick={() => setErrorMessage("")}>
            X
          </button>
          <p >{errorMessage}</p>
        </StyledMessage>
      ) : (
        <hr />
      )}
      <TodosViewForm
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
        sortField={sortField}
        setSortField={setSortField}
        queryString={queryString}
        setQueryString={setQueryString}
      />
    </main>
  );
}

const StyledMessage = styled.div`
  p {
  border: 1px dashed red;
  padding: 1rem;
  margin: 0.5rem auto 
  }
  button {
    transition: 400ms all ease-in-out;
  }
  button:hover {
    background-color: red;
    color: black;
    transition: 400ms all ease-in-out;
  }
`

export default App;
