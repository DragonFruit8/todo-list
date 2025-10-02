import { useState, useEffect, useReducer, useMemo } from "react";
import TodoList from "../features/TodoList/TodoList";
import TodoForm from "../features/TodoForm";
import TodosViewForm from "../features/TodosViewForm";
import "../App.module.css";
import styled from "styled-components";
import {
  reducer as todosReducer,
  actions as todoActions,
  initialState as initTodoState,
} from "../reducers/todos.reducer";
import { useSearchParams } from "react-router";
import { encodeUrl } from "../utilities/EncodeUrl.js";

function TodosPage() {
  const token = import.meta.env.VITE_PAT;
  const [sortField, setSortField] = useState("createdTime");
  const [sortDirection, setSortDirection] = useState("asc");
  const [queryString, setQueryString] = useState("");
  const [todoState, dispatch] = useReducer(todosReducer, initTodoState);
  const todoMemo = useMemo(() => todoState.todoList, [todoState.todoList]);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const itemsPerPage = 10;
  const indexOfLastEntry = currentPage * itemsPerPage;
  const indexOfFirstTodo = indexOfLastEntry - itemsPerPage;
  const totalPages = Math.ceil(todoMemo.length / itemsPerPage);
  const currentEntries = todoMemo.slice(indexOfFirstTodo, indexOfLastEntry);
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setSearchParams({ page: `${currentPage + 1}` });
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setSearchParams({ page: `${currentPage - 1}` });
    }
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
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
  }, [queryString, sortDirection, sortField, token]);

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
    const todoId = todoMemo.find((todo) => todo.id === id);
    const todoIsComplete = todoMemo.map((todo) => {
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
        Authorization: `Bearer ${token}`,
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
    const originalTodo = todoMemo.find((todo) => todo.id === id);
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
        Authorization: `Bearer ${token}`,
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
      <div>
        <TodoForm
          onAddTodo={addTodo}
          text={todoState.isSaving ? "Saving..." : "Add Todo"}
        />
        {todoMemo === 0 ? (
          <p>Add Todo Item...</p>
        ) : (
          <>
            <TodoList
              todoList={currentEntries || todoMemo}
              isLoading={todoState.isLoading}
              onUpdateTodo={updateTodo}
              onCompleteTodo={completeTodo}
            />
            <div className="paginationControls">
              <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                Previous
              </button>
              <span>
                {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </>
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
      </div>
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
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .paginationControls {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    button {
      max-width: 20%;
    }
  }
  .paginationControls button {
    transition: 400ms all ease-in-out;
  }
  .paginationControls button:hover {
    color: red;
    transition: 400ms all ease-in-out;
  }
  .paginationControls button:disabled {
    color: black;
    cursor: default;
    background-color: lightgray;
  }
`;
export default TodosPage;
