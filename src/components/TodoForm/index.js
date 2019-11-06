import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const TodoForm = ({ addTodo }) => {
  let inputNode = null;
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        if (!inputNode.value.trim()) return;
        addTodo(inputNode.value);
        inputNode.value = "";
      }}
    >
      <Form.Group>
        <Form.Label>Add Todos</Form.Label>
        <Form.Control
          ref={node => (inputNode = node)}
          placeholder="Enter Todo"
        />
      </Form.Group>
      <Button type="submit" block>
        Add
      </Button>
    </Form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoForm;
