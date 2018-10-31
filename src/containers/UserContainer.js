import User from "../components/User";
import { connect } from "react-redux";
import { getRandomUser } from "../actions/userActions";

const mapDispatchToProps = dispatch => {
  return {
    getRandomUser: () => dispatch(getRandomUser())
  };
};

const mapStateToProps = state => {
  console.log(state.user);
  return {
    user: state.user
  };
};

const CounterConainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

export default CounterConainer;
