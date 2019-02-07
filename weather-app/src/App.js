import { connect } from "react-redux";
import { getSuggestions, setSuggestions } from "./actions/placesActions";
import { addItem, removeItem } from "./actions/CardActions";
import Main from "./components/Main";

/*
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch => ({
  getSuggestions: city => dispatch(getSuggestions(city)),
  addCity: city => dispatch(addItem(city)),
  setSuggestions: payload => dispatch(setSuggestions(payload)),
  removeCity: id => dispatch(removeItem(id))
});

/*
 * mapStateToProps
 */
const mapStateToProps = state => ({
  ...state
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
