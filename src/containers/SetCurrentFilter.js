import { connect } from "react-redux";
import Filters from "../components/Filters";
import { setCurrentFilter } from "../actions";

const mapStateToProps = ({ currentFilter }) => ({
  currentFilter
});

const mapDispatchToProps = dispatch => ({
  setCurrentFilter: filter => dispatch(setCurrentFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
