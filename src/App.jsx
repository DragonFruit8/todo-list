import { useState, useEffect, useCallback, useReducer } from "react";
import TodoList from "./features/TodoList/TodoList";
import TodoForm from "./features/TodoForm";
import TodosViewForm from "./features/TodosViewForm";
import "./App.module.css";
import styled from "styled-components";
import TodoLogo from "./assets/favicon.ico";
import {
  reducer as todosReducer,
  actions as todoActions,
  initialState as initTodoState,
} from "./reducers/todos.reducer";

function App() {
  const url = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${
    import.meta.env.VITE_TABLE_NAME
  }`;
  const token = import.meta.env.VITE_PAT;
  const [sortField, setSortField] = useState("createdTime");
  const [sortDirection, setSortDirection] = useState("asc");
  const [queryString, setQueryString] = useState("");
  const [todoState, dispatch] = useReducer(todosReducer, initTodoState);

  const encodeUrl = useCallback(
    ({ sortDirection, sortField, queryString }) => {
      dispatch({
        type: todoActions.setSortQuery,
        payload: `sort[0][field]=${sortField}&sort[0][direction]=${sortDirection}`,
      });

      if (queryString) {
        dispatch({ type: todoActions.setSearchQuery, payload: queryString });
      } else if (!queryString) {
        dispatch({ type: todoActions.setSearchQuery, payload: "" });
      }
      return encodeURI(`${url}?${todoState.sortQuery}${todoState.searchQuery}`);
    },
    [url, todoState.sortQuery, todoState.searchQuery]
  );

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    };
    const fetchTodos = async () => {
      try {
        dispatch({ type: todoActions.fetchTodos });
        const resp = await fetch(
          encodeUrl({ queryString, sortDirection, sortField }),
          options
        );
        if (!resp.ok) {
          throw new Error(resp.status);
        }
        const { records } = await resp.json();
        dispatch({ type: todoActions.loadTodos, records });
      } catch (error) {
        dispatch({ type: todoActions.setLoadError, error });
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
      dispatch({ type: todoActions.startRequest });
      const resp = await fetch(
        encodeUrl({ queryString, sortDirection, sortField }),
        options
      );
      if (!resp.ok) {
        throw new Error("Data failed to be post");
      }
      const { records } = await resp.json();
      dispatch({ type: todoActions.addTodo, records });
    } catch (error) {
      dispatch({ type: todoActions.setLoadError, error });
    } finally {
      dispatch({ type: todoActions.endRequest });
    }
  };

  const completeTodo = async (id, event) => {
    const todoId = todoState.todoList.find((todo) => todo.id === id);
    const todoIsComplete = todoState.todoList.map((todo) => {
      if (todo.id === id) {
        todoId.isComplete = event.target.checked;
      }
      return todo;
    });
    const payload = {
      records: [
        {
          id: todoId.id,
          fields: {
            isComplete: todoId.isComplete,
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
      dispatch({ type: todoActions.startRequest });
      const resp = await fetch(
        encodeUrl({ queryString, sortDirection, sortField }),
        options
      );
      if (!resp.ok) {
        throw new Error("Data failed to be post");
      }
      const { records } = await resp.json();
      dispatch({ type: todoActions.completeTodo, records });
      if (records[0].fields.isComplete) {
        console.log(`${records[0].fields.title} is CHECKED in the Database`);
      } else if (!records[0].fields.isComplete) {
        console.log(`${records[0].fields.title} is UNCHECKED in the Database`);
      }
    } catch (error) {
      dispatch({ type: todoActions.setLoadError, error });
      dispatch({ type: todoActions.updateTodo, todoIsComplete });
    } finally {
      dispatch({ type: todoActions.endRequest });
    }
  };

  const updateTodo = async (id, editedTodo) => {
    const originalTodo = todoState.todoList.find((todo) => todo.id === id);
    // Will have to come back to figure this logic out after useReducer utilized
    if (originalTodo.title == editedTodo) {
      return;
    } else {
      originalTodo.isComplete = false;
      originalTodo.title = editedTodo;
    }
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
      dispatch({ type: todoActions.startRequest });
      const resp = await fetch(
        encodeUrl({ queryString, sortDirection, sortField }),
        options
      );
      if (!resp.ok) {
        throw new Error("Data failed to be post");
      }
      const { records } = await resp.json();
      dispatch({ type: todoActions.updateTodo, records });
    } catch (error) {
      const revertedTodos = {
        id: originalTodo.id,
        title: originalTodo.title,
      };
      dispatch({ type: todoActions.revertTodo, revertedTodos });
      dispatch({ type: todoActions.setLoadError, error });
    } finally {
      dispatch({ type: todoActions.endRequest });
    }
  };

  return (
    <Main>
      <h1>
        <span>
          <img src={TodoLogo} alt="Terra'Novare logo" />
        </span>
        My Todos
      </h1>
      <TodoForm
        onAddTodo={addTodo}
        text={todoState.isSaving ? "Saving..." : <span>Add Todo</span>}
      />
      {todoState.todoList === 0 ? (
        <p>Add Todo Item...</p>
      ) : (
        <TodoList
          todoList={todoState.todoList}
          isLoading={todoState.isLoading}
          onUpdateTodo={updateTodo}
          onCompleteTodo={completeTodo}
        />
      )}
      {todoState.errorMessage !== "" ? (
        <div>
          <hr />
          <button
            className="close"
            onClick={() => dispatch({ type: todoActions.clearError })}
          >
            X
          </button>
          <p>{todoState.errorMessage}</p>
        </div>
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
    </Main>
  );
}
const Main = styled.main`
  margin: 4rem auto auto auto;
  max-width: 600px;
  padding: 0 0.7rem;
  z-index: 1;
  h1 {
    span {
      img {
        border-radius: 15px;
        width: 25px;
        height: 25px;
      }
    }
  }
  button {
    transition: 400ms all ease-in-out;
  }
  button:hover {
    color: red;
    transition: 400ms all ease-in-out;
  }
`;
export default App;
