import { useEffect, useReducer } from "react";
import styled from "styled-components";
import {
  reducer as todosReducer,
  actions as todoActions,
  initialState as initTodoState,
} from "../reducers/todos.reducer";
export default function TodosViewForm() {
  const [todoState, dispatch] = useReducer(todosReducer, initTodoState);

  useEffect(() => {
    const debounce = setTimeout(() => {
      dispatch({
        type: todoActions.loadLocalQueryString,
        payload: todoState.localQueryString,
      });
    }, 500);
    dispatch({ type: todoActions.setQuery });
    return () => clearTimeout(debounce);
  }, [todoState.localQueryString]);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <StyledDiv>
        <label htmlFor="searchQuery">Search todos: </label>
        <br />
        <input
          id="searchQuery"
          type="text"
          value={todoState.localQueryString}
          onChange={(e) =>
            dispatch({
              type: todoActions.loadLocalQueryString,
              payload: e.target.value,
            })
          }
        />
        <button
          type="button"
          onClick={() =>
            dispatch({ type: todoActions.loadLocalQueryString, payload: "" })
          }
        >
          Clear
        </button>
      </StyledDiv>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="sortField">Sort by</label>
        <select
          id="sortField"
          value={todoState.sortField}
          onChange={(e) =>
            dispatch({
              type: todoActions.setSortField,
              payload: e.target.value,
            })
          }
        >
          <option value="title">Title</option>
          <option value="createdTime">Time added</option>
        </select>
        <label htmlFor="sortDirection">Sort by Direction </label>
        <select
          id="sortDirection"
          value={todoState.sortDirection}
          onChange={(e) =>
            dispatch({
              type: todoActions.setSortDirection,
              payload: e.target.value,
            })
          }
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  gap: 0.7rem;
`;
const StyledDiv = styled.div`
  display: flex;
  gap: 0.7rem;
  margin: 1rem 0;
  flex-wrap: wrap;
  input {
    width: 100%;
    min-width: 150px;
  }
  button {
    background-color: #5b0900ff;
    transition: all 250ms ease-in-out;
  }
  button:hover {
    background-color: #ff1900ff;
    transition: all 250ms ease-in-out;
  }
  button:focus {
    outline: 2px red solid;
    outline-offset: 4px;
  }
`;
