import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const API_URL =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskText, setEditTaskText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setTodos(data.map((todo) => ({ ...todo, completed: false })));
      } catch (error) {
        console.log("Error fetching data from API:", error);
      }
    };
    fetchData();
  }, []);

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };

  const addTodo = (task, date) => {
    if (task !== "" && date !== "") {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          {
            id: prevTodos.length + 1,
            description: task,
            deadline: date,
            completed: false,
          },
        ];
      });
    } else {
      // Handle case when the task description or date is empty
      // You can show an error message or perform any desired action here
      console.log("Empty task description or date");
    }
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  // Function to handle edit icon click
  const handleEditClick = (id, task) => {
    setEditTaskId(id);
    setEditTaskText(task);
  };

  // Function to handle task update
  const handleTaskUpdate = (id, updatedTask) => {
    if (updatedTask !== "") {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, description: updatedTask } : todo
        )
      );
      setEditTaskId(null);
      setEditTaskText("");
    }
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <div className="list">
        <ul>
          {todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                toggleComplete={toggleComplete}
                handleEditClick={handleEditClick}
                editTaskId={editTaskId}
                editTaskText={editTaskText}
                handleTaskUpdate={handleTaskUpdate}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
