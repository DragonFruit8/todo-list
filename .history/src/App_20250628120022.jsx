import "./App.css";

function App() {


  return (
    <div>
      <h1>My Todos</h1>
      
        <TodoListItem 
          item={{
            id: 1,
            title: "review resources"
          }} />
        <TodoListItem 
          item={{
            id: 2,
            title: "take notes" 
          }} />
        <TodoListItem 
          item={{
            id: 3,
            title: "code out app"
          }} />
      </ul>
    </div>
  );
}

export default App;
