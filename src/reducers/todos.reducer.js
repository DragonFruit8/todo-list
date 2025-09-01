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
};

const initialState = {
  todoList: [],
  isLoading: false,
  errorMessage: "",
  isSaving: false,
  resp: 0,
  savedTodo: {},
  revertedTodos: {},
  sortField: "createdTime",
  sortDirection: "asc",
  searchQuery: "",
  queryString: "",
  sortQuery: "",
  localQueryString: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.fetchTodos:
      return {
        ...state,
        isLoading: true,
      };
    case actions.loadTodos:
      return {
        ...state,
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
        todoList: [...state.todoList],
      };
    case actions.completeTodo:
      return {
        ...state,
        // Duplicate Code... Same as actions.updateTodo
        todoList: [...state.todoList],
      };
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
    case actions.setSortQuery:
      state.searchQuery = "";
      state.sortQuery = `sort[0][field]=${state.sortField}&sort[0][direction]=${state.sortDirection}`;
      if (state.queryString) {
        state.searchQuery = `&filterByFormula=SEARCH("${state.queryString}",+title)`;
      }
      return {
        ...state,
        ...state.sortField,
        ...state.searchQuery,
        ...state.sortQuery,
      };
    case actions.setLocalQuery:
      // state.localQueryString = action.payload.target.value
      return {
        ...state,
        localQueryString: action.payload
      };
    case actions.setSortField:
      return {
        ...state,
      };
    case actions.setSortDirection:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export { initialState, actions, reducer };
