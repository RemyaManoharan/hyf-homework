import "./App.css";
import Header from "./Header";
import todos from "./Todos";
import TodoList from "./TodoList";

function App() {
  return (
    <div>
      <Header />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
