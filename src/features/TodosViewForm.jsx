
export default function TodosViewForm({
    sortDirection, 
    setSortDirection, 
    sortField, 
    setSortField,
    queryString,
    setQueryString
}) {

    function handleSubmit(event) {
        event.preventDefault();
    }
  return (
    <>
    <div>
    <label>Search todos:</label><br />
    <input 
        type="text"
        value={queryString}
        onChange={(e) => setQueryString(e.target.value)}
        />
        <button type="button" onClick={() => setQueryString("")}>Clear</button>
    </div>
    <label>Sort by</label>
    <form onSubmit={handleSubmit}>
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
    </form>
    </>
  )
}

