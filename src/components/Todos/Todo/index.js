import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import PropTypes from "prop-types";

const stylesCompleted = {
  textDecoration: "line-through",
  color: "gray"
};

const Todo = ({ completed, clicked, children }) => (
  <ListGroup.Item onClick={clicked} style={completed ? stylesCompleted : null}>
    {children}
  </ListGroup.Item>
);

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
export default Todo;
