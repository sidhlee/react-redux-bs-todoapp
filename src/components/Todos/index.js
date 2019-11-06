import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./index.module.css";
import Todo from "./Todo";
import PropTypes from "prop-types";

const Todos = ({ filteredTodos, toggleTodo }) => {
  const todos = filteredTodos.map(todo => (
    <Todo
      key={todo.id}
      clicked={() => toggleTodo(todo.id)}
      completed={todo.completed}
    >
      {todo.text}
    </Todo>
  ));

  return <ListGroup variant="flush">{todos}</ListGroup>;
};

Todos.propTypes = {
  filteredTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ),
  toggleTodo: PropTypes.func.isRequired
};
export default Todos;
