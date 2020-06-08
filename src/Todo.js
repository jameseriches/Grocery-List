import React from "react";

const Todo = ({ name, complete, id, groceryClick1 }) => (
  <li
    style={complete ? { ...styles.todo, ...styles.complete } : styles.todo}
    onClick={() => groceryClick1(id)}
  >
    {name}
  </li>
);

const styles = {
  todo: { cursor: "pointer"},
  complete: {
    color: "grey",
    textDecoration: "line-through",
  },
};
export default Todo;
