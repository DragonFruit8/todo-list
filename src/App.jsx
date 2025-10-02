import { useEffect, useReducer, useState } from "react";
import { Routes, Route } from "react-router";
import TodosPage from "./pages/TodosPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import Header from "./shared/Header";
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
  const [todoState, dispatch] = useReducer(todosReducer, initTodoState);
  const [todos, setTodos] = useState(todoState.todoList);
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
        const resp = await fetch(url, options);
        if (!resp.ok) {
          throw new Error(resp.status);
        }
        const { records } = await resp.json();
        setTodos(records);
      } catch (error) {
        dispatch({ type: todoActions.setLoadError, error });
      }
    };
    fetchTodos();
  }, [url, token]);

  return (
    <>
      <Header title={"My Todos"} />
      <Routes>
        <Route index path="/" element={<TodosPage todoList={todos} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
