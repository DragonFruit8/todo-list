import { useEffect, useReducer } from "react";
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
  const [todoState, dispatch] = useReducer(todosReducer, initTodoState);
  const token = import.meta.env.VITE_PAT;
  const url = todoState.url;
  const localQueryString = todoState.localQueryString;
  const encoded = todoState.encoded;

  // const refreshTodos = useCallback(async () => {
  //   const options = {
  //     method: "GET",
  //     body: JSON.stringify(),
  //     headers: {
  //       Authorization: token,
  //     },
  //   };
  //     dispatch({ type: todoActions.fetchTodos });
  //     try {
  //       let resp;

  //       dispatch({
  //         type: todoActions.setQuery,
  //         payload: localQueryString,
  //       });
        
  //       resp = await fetch(encoded, options);

  //       if (!resp.ok) {
  //         throw new Error(resp.status);
  //       }
  //       const { records } = await resp.json();
  //       dispatch({ type: todoActions.loadTodos, records });
  //     } catch (error) {
  //       dispatch({ type: todoActions.setLoadError, error });
  //     }
  //   },[encoded, localQueryString, token]);

  useEffect(() => {
    const options = {
      method: "GET",
      body: JSON.stringify(),
      headers: {
        Authorization: token,
      },
    };
    
    const fetchTodos = async () => {
      dispatch({ type: todoActions.fetchTodos });
      try {
        let resp, queryString;

        dispatch({
          type: todoActions.setQuery,
          payload: localQueryString,
        });
        if (localQueryString !== "") {
          queryString = encoded;
        } else {
          queryString = url;
        }
        resp = await fetch(queryString, options);

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
  }, [url, localQueryString, encoded, token]);



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
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    try {
      dispatch({ type: todoActions.startRequest });
      const resp = await fetch(url, options);
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
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    try {
      dispatch({ type: todoActions.startRequest });
      const resp = await fetch(url, options);
      if (!resp.ok) {
        throw new Error("Data failed to be post");
      }
      const { records } = await resp.json();
      dispatch({ type: todoActions.completeTodo, records });
      
    } catch (error) {
      dispatch({ type: todoActions.setLoadError, error });
      dispatch({ type: todoActions.updateTodo, todoIsComplete });
    } finally {
      dispatch({ type: todoActions.endRequest });
    }
  };

  const updateTodo = async (id, editedTodo) => {
    const originalTodo = todoState.todoList.find((todo) => todo.id === id);
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
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    try {
      dispatch({ type: todoActions.startRequest });
      const resp = await fetch(url, options);
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

  const deleteTodo = async (id) => {
    const deletedTodo = todoState.todoList.find((todo) => todo.id === id);
    const todoID = deletedTodo.id;
    const remappedTodoList = todoState.todoList.reduce((acc, item) => {
      if (item.id !== todoID) {
        acc.push(item);
      }
      return acc;
    }, []);
    dispatch({ type: todoActions.todoRefresh, payload: remappedTodoList });
    const payload = {
      records: {
        id: todoID,
      },
    };
    const options = {
      method: "DELETE",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    try {
      dispatch({ type: todoActions.startRequest });
      const resp = await fetch(`${url}/${deletedTodo.id}`, options);

      if (!resp.ok) {
        throw new Error("Todo NOT FOUND");
      }
      const { records } = await resp.json();
      if (!records) {
        dispatch({ type: todoActions.todoRefresh, payload: remappedTodoList });
        alert(`"${deletedTodo.title}" DELETED`);
      }
    } catch (error) {
      dispatch({ type: todoActions.setLoadError, error });
    } finally {
      dispatch({ type: todoActions.endRequest });
    }
  };

  useEffect(() => {
    todoState.todoList;
  }, [todoState.todoList]);

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
      {todoState.todoList <= 0 ? (
        <p>Add Todo Item...</p>
      ) : (
        <TodoList
          todoList={todoState.todoList}
          isLoading={todoState.isLoading}
          onUpdateTodo={updateTodo}
          onCompleteTodo={completeTodo}
          onDeleteTodo={deleteTodo}
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
      <TodosViewForm />
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
