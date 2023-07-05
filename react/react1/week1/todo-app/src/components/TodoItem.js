import React from "react";

function TodoItem(props) {
  const { description, deadline } = props;
  return (
    <li>
      <h3>
        {description} {deadline}
      </h3>
    </li>
  );
}

export default TodoItem;
