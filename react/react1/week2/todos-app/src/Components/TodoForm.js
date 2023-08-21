import { useState } from "react";

function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask("");
  };

  return (
    <div>
      <form className="form-group">
        <input
          type="text"
          placeholder="Enter the task"
          className="form-control"
          value={task}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>ADD</button>
      </form>
    </div>
  );
}

export default TodoForm;
