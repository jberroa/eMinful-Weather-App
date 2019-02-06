import { connect } from "react-redux";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import { addItem, removeItem } from "../actions/CardActions";
/*
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch => ({
  addCity: city => dispatch(addItem(city)),
  removeCity: id => dispatch(removeItem(id))
});

/*
 * mapStateToProps
 */
const mapStateToProps = state => ({
  cities: state.cities
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherCard);
