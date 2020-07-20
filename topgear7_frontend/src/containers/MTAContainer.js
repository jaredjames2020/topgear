import React, {Component} from "react";
import {connect} from "react-redux";
import Routefinder from "../components/Home/Routefinder";

class MTAContainer extends Component {
  render() {
    return (
      <div>
        <Routefinder vehicleActivity={this.props.VehicleActivity} />
      </div>
    );
  }
} //TODO: LOADING FEATURE WHEN DATA IS FETCHING

const mapStateToProps = state => {
  return {
    VehicleActivity: state.bus_data,
    loading: state.loading
  };
};

// const mapDispatchToProps = dispatch => ({
//   findRoute: route => dispatch({type: "FIND_ROUTE", route})
// });

export default connect(mapStateToProps)(MTAContainer);
