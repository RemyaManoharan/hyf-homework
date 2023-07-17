import { useState } from "react";

function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    // Check if the deadline is not empty and is not before the current day
    if (selectedDate !== "") {
      const currentDate = new Date().toISOString().split("T")[0]; // Get current date
      if (selectedDate >= currentDate) {
        setDate(selectedDate);
      } else {
        // Handle case when deadline is before the current day
        // You can show an error message or perform any desired action here
        console.log("Invalid deadline");
      }
    }
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task, date);
    setTask("");
    setDate("");
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

        <input
          type="date"
          placeholder="Enter the deadline"
          className="form-control"
          value={date}
          onChange={handleDateChange}
        />

        <button onClick={handleSubmit}>ADD</button>
      </form>
    </div>
  );
}

export default TodoForm;
