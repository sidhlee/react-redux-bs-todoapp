import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import Todos from "../components/Todos";
import { filterTypes } from "../actions";

const filterTodo = (todos, filter) => {
  switch (filter) {
    case filterTypes.SHOW_ALL:
      return [...todos];
    case filterTypes.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case filterTypes.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      return new Error("Unknown filter type: ", filter);
  }
};

const mapStateToProps = ({ todos, currentFilter }) => ({
  filteredTodos: filterTodo(todos, currentFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
