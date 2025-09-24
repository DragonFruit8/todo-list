import { useEffect, useState } from "react";
import styled from "styled-components";
export default function TodosViewForm({
  sortDirection,
  setSortDirection,
  sortField,
  setSortField,
  queryString,
  setQueryString,
}) {
  const [localQueryString, setLocalQueryString] = useState(queryString);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setQueryString(localQueryString);
    }, 500);
    return () => clearTimeout(debounce);
  }, [localQueryString, setQueryString]);
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <StyledDiv>
        <label>Search todos: </label>
        <br />
        <input
          type="text"
          value={localQueryString}
          onChange={(e) => setLocalQueryString(e.target.value)}
        />
        <button type="button" onClick={() => { setLocalQueryString(""); setQueryString(""); }}>
          Clear
        </button>
      </StyledDiv>
      <StyledForm onSubmit={handleSubmit}>
        <label>Sort by</label>
        <select
          value={sortField}
          onChange={(event) => setSortField(event.target.value)}
        >
          <option value="title">Title</option>
          <option value="createdTime">Time added</option>
        </select>
        <select
          value={sortDirection}
          onChange={(event) => setSortDirection(event.target.value)}
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
  button{
    background-color: #5b0900ff;
    transition: all 250ms ease-in-out;
  }
  button:hover{
    background-color: #ff1900ff;
    transition: all 250ms ease-in-out;
  }
  button:focus{
    outline: 2px red solid;
    outline-offset: 4px;
  }
`;
