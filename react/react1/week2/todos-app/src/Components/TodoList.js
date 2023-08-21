import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoArray from "./TodoArray";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState(TodoArray);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskText, setEditTaskText] = useState("");
  console.log(todos);

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };

  const addTodo = (task) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: prevTodos.length + 1,
          task: task,
          completed: false,
        },
      ];
    });
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
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, task: updatedTask } : todo
      )
    );
    setEditTaskId(null);
    setEditTaskText("");
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
