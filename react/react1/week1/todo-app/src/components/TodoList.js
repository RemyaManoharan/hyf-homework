import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </ul>
  );
}

export default TodoList;
