const actions = {
  fetchTodos: "fetchTodos",
  loadTodos: "loadTodos",
  setLoadError: "setLoadError",
  startRequest: "startRequest",
  addTodo: "addTodo",
  endRequest: "endRequest",
  updateTodo: "updateTodo",
  completeTodo: "completeTodo",
  revertTodo: "revertTodo",
  clearError: "clearError",
  loadLocalQueryString: "loadLocalQueryString",
  setQuery: "setQuery",
  setSortDirection: "setSortDirection",
  setSortField: "setSortField",
  todoRefresh: "todoRefresh",
};

const initialState = {
  url: `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`,
  encoded: "",
  todoList: [],
  isLoading: false,
  isSaving: false,
  errorMessage: "",
  savedTodo: {},
  revertedTodos: {},
  sortField: "createdTime",
  sortDirection: "asc",
  searchQuery: "",
  sortQuery: "",
  localQueryString: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.updateString:
      if(state.localQueryString) {
        state.queryString = state.encoded
      } else {
        state.queryString
      }
      return {
        ...state,
        queryString: state.queryString,
      }
    case actions.fetchTodos:
      
      return {
        ...state,
        isLoading: true,
        localQueryString: state.localQueryString,
        url: state.url,
      };
    case actions.loadTodos:
      return {
        ...state,
        localQueryString: state.localQueryString,
        todoList: [
          ...action.records.map((record) => {
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
          }),
        ],
        isLoading: false,
      };
    case actions.setLoadError:
      return {
        ...state,
        errorMessage: action.error.message,
        isLoading: false,
      };
    case actions.startRequest:
      return {
        ...state,
        isSaving: true,
      };
    case actions.addTodo:
      state.savedTodo = {
        id: action.records[0].id,
        title: action.records[0].fields.title,
        isComplete: action.records[0]?.isComplete || false,
      };
      return {
        ...state,
        savedTodo: state.savedTodo,
        todoList: [...state.todoList, state.savedTodo],
        isSaving: false,
      };
    case actions.endRequest:
      return {
        ...state,
        isLoading: false,
        isSaving: false,
      };
    case actions.updateTodo:
      
      return {
        ...state,
        ...state.todoList,
        todoList: [...state.todoList, action.payload],
      };
    case actions.completeTodo:
      if (action.records[0].fields.isComplete) {
        console.log(`Database: \n"${action.records[0].fields.title}" is CHECKED`);
      } else if (!action.records[0].fields.isComplete) {
        console.log(`Database: \n"${action.records[0].fields.title}" is UNCHECKED`);
      }
      return {
        ...state,
        todoList: [...state.todoList],
      };
    case actions.todoRefresh:
      state.todoList = action.payload
      return {
        ...state,
        todoList: [...state.todoList]
      }  
    case actions.revertTodo:
      return {
        ...state,
        todoList: [...state.todoList, action.revertedTodos],
      };
    case actions.clearError:
      return {
        ...state,
        errorMessage: "",
      };
    case actions.setQuery:
      state.localQueryString
      state.searchQuery = "";
      state.sortQuery = `sort[0][field]=${state.sortField}&sort[0][direction]=${state.sortDirection}`;
      if(state.localQueryString) {
        state.searchQuery = `&filterByFormula=SEARCH("${state.localQueryString}",+title)`;
        state.encoded = encodeURI(`${state.url}?${state.sortQuery}${state.searchQuery}`);
      }
      return {
        ...state,
        sortField: state.sortField,
        sortDirection: state.sortDirection,
        localQueryString: state.localQueryString,
        encoded: state.encoded,
        searchQuery: state.searchQuery,
      };
    case actions.loadLocalQueryString:
      state.localQueryString = action.payload
      return {
        ...state,
        localQueryString: state.localQueryString,
      };
    case actions.setSortField:
      state.sortField = action.payload
      state.sortQuery = `sort[0][field]=${state.sortField}&sort[0][direction]=${state.sortDirection}`;
      // state.encoded = encodeURI(`${state.url}?${state.sortQuery}${state.searchQuery}`);
      return {
        ...state,
        sortField: state.sortField,
        sortQuery: state.sortQuery,
        encoded: state.encoded,
      };
    case actions.setSortDirection:
    state.sortDirection = action.payload
    state.sortQuery = `sort[0][field]=${state.sortField}&sort[0][direction]=${state.sortDirection}`;
    // state.encoded = encodeURI(`${state.url}?${state.sortQuery}${state.searchQuery}`);

    // if(state.sortDirection === "asc") {
    //   state.todoList = state.todoList.sort((a,b) => {
    //        a = new Date(a.createdTime)
    //        b = new Date(b.createdTime)
    //        return a - b
    //   });
    // } else if (state.sortDirection === "desc") {
    //   state.todoList = state.todoList.sort((a,b) => {
    //        a = new Date(a.createdTime)
    //        b = new Date(b.createdTime)
    //        return a - b
    //   })
    // }
    return {
        ...state,
        todoList: state.todoList,
        sortDirection: state.sortDirection,
        sortQuery: state.sortQuery,
        encoded: state.encoded,
      };
    default:
      return state;
  }
}

export { initialState, actions, reducer };
