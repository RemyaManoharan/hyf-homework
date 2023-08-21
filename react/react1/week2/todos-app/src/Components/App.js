import "./App.css";
import Header from "./Header";
import Timer from "./Timer";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <Timer />
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
