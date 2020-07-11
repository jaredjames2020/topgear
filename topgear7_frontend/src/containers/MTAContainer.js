import React, {Component} from "react";
import {connect} from "react-redux";
import Routefinder from "../components/Routefinder";

class MTAContainer extends Component {
  render() {
    return (
      <div>
        <Routefinder vehicleActivity={this.props.VehicleActivity} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    VehicleActivity: state.bus_data
  };
};

const mapDispatchToProps = dispatch => ({
  findRoute: route => dispatch({type: "FIND_ROUTE", route})
});

export default connect(mapStateToProps, mapDispatchToProps)(MTAContainer);
