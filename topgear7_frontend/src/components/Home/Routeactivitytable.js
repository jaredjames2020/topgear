import React, {Component} from "react";
import {Table} from "react-bootstrap";
import {
  addCongestionActivity,
  addDelayActivity
} from "../../actions/activityActions";
import {connect} from "react-redux";

class Routeactivitytable extends Component {
  gettablename = direction => {
    return direction.map((bus, index) => {
      let desName = bus.MonitoredVehicleJourney.DestinationName;
      return desName;
    });
  };

  getname = array => {
    return array[0];
  };

  gettableheader = () => {
    let header = ["Next Stop", "Congestion", "Delay", "Seating", "On Time"];
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  gettabledata = direction => {
    return direction.map((bus, index) => {
      let vehId = bus.MonitoredVehicleJourney.VehicleRef;
      let lat = bus.MonitoredVehicleJourney.VehicleLocation.Latitude;
      let long = bus.MonitoredVehicleJourney.VehicleLocation.Longitude;
      let nextStop = bus.MonitoredVehicleJourney.MonitoredCall.StopPointName;
      return (
        <tr key={vehId}>
          <td>{nextStop}</td>
          <td>{"Normal"}</td>
          <td>{"No delay"}</td>
          <td>
            <select className="congestionbtn">
              <option value={vehId + "-manyseats"}>Many Seats</option>
              <option value={vehId + "-limitedseats"}>Limited Seats</option>
              <option value={vehId + "-noseats"}>No Seats</option>
            </select>
          </td>
          <td>
            <select className="delaybtn">
              <option value={vehId + "-nodelay"}>No Delay</option>
              <option value={vehId + "-emergency"}>Emergency</option>
              <option value={vehId + "-accident"}>Accident</option>
            </select>
          </td>
        </tr>
      );
    });
  };

  handleCongestionOnSelect = event => {
    const seating = event.target.value.split("-");
    this.props.addCongestionActivity(seating);
    console.log(seating);
  };

  handleDelayOnSelect = event => {
    const punctual = event.target.value.split("-");
    this.props.addDelayActivity(punctual);
    console.log(punctual);
  };

  render() {
    const {directionRef0, directionRef1} = this.props;
    const {getname, gettableheader, gettablename, gettabledata} = this;

    return (
      <div>
        <h3 id="title">REAL TIME ACTIVITY TRACKER</h3>
        <h4>{getname(gettablename(directionRef0))}</h4>
        <Table
          className="table table-sm"
          id="dir0_activity_table"
          onChange={this.handleCongestionOnSelect}
          onChange={this.handleDelayOnSelect}
        >
          <thead>
            <tr>{gettableheader(directionRef0)}</tr>
          </thead>
          <tbody>{gettabledata(directionRef0)}</tbody>
        </Table>

        <h4>{getname(gettablename(directionRef1))}</h4>
        <Table
          className="table table-sm"
          id="dir1_activity_table"
          onChange={this.handleCongestionOnSelect}
          onChange={this.handleDelayOnSelect}
        >
          <thead>
            <tr>{gettableheader(directionRef1)}</tr>
          </thead>
          <tbody>{gettabledata(directionRef1)}</tbody>
        </Table>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCongestionActivity: activity => {
      dispatch(addCongestionActivity(activity));
    },
    addDelayActivity: activity => {
      dispatch(addDelayActivity(activity));
    }
  };
};

export default connect(null, mapDispatchToProps)(Routeactivitytable);
// <td>{lat}</td>
// <td>{long}</td>
// ["Next Stop", "Congestion", "Delay", "Latitude", "Longitude"]
