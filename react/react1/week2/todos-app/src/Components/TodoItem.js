import React, { useState } from "react";
import { IoMdDoneAll } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function TodoItem(props) {
  const {
    todo,
    removeTodo,
    toggleComplete,
    handleEditClick,
    editTaskId,
    editTaskText,
    handleTaskUpdate,
  } = props;
  const [updatedTask, setUpdatedTask] = useState(todo.task);

  // Function to handle task update
  const handleUpdate = () => {
    handleTaskUpdate(todo.id, updatedTask);
  };

  return (
    <div>
      <li className="list-items">
        <div className="list-item-list" id={todo.completed ? "list-item" : ""}>
          {todo.id === editTaskId ? (
            <input
              type="text"
              value={updatedTask}
              onChange={(e) => setUpdatedTask(e.target.value)}
            />
          ) : (
            todo.task
          )}
        </div>
        <span className="list-action">
          <IoMdDoneAll
            className="list-items-icons"
            id={todo.completed ? "complete" : ""}
            title="Complete"
            onClick={() => toggleComplete(todo.id)}
          />
          {todo.id === editTaskId ? (
            <FiEdit
              className="list-items-icons"
              id="edit"
              title="Update"
              onClick={handleUpdate}
            />
          ) : (
            <FiEdit
              className="list-items-icons"
              id="edit"
              title="Edit"
              onClick={() => handleEditClick(todo.id, todo.task)}
            />
          )}
          <MdDelete
            className="list-items-icons"
            id="delete"
            title="Delete"
            onClick={() => removeTodo(todo.id)}
          />
        </span>
      </li>
    </div>
  );
}

export default TodoItem;
