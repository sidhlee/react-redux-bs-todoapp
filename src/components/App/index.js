import React from "react";
import Container from "react-bootstrap/Container";
import Header from "../Header";
// containers
import AddTodo from "../../containers/AddTodo";
import SetCurrentFilter from "../../containers/SetCurrentFilter";
import FilterTodos from "../../containers/FilterTodos";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <AddTodo />
        <SetCurrentFilter />
        <FilterTodos />
      </Container>
    </div>
  );
}

export default App;
