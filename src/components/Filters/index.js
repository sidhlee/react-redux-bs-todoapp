import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classes from "./index.module.css";
import PropTypes from "prop-types";

const Filters = ({ currentFilter, setCurrentFilter }) => {
  console.log(currentFilter);
  return (
    <Navbar
      className="justify-content-center"
      onSelect={eventKey => {
        setCurrentFilter(eventKey);
      }}
    >
      <Nav activeKey={currentFilter}>
        <Nav.Link className={classes.Filter} eventKey="SHOW_ALL">
          All
        </Nav.Link>
        <Nav.Link className={classes.Filter} eventKey="SHOW_COMPLETED">
          Completed
        </Nav.Link>
        <Nav.Link className={classes.Filter} eventKey="SHOW_ACTIVE">
          Active
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

Filters.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  setCurrentFilter: PropTypes.func.isRequired
};

export default Filters;
