import "./App.css";
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
 

  return (
    <div>
      <h1>My Todos</h1>
      <ul>
        <TodoList />
        <TodoForm />
      </ul>
    </div>
  );
}

export default App;
