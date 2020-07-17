import React, {Component} from "react";
import Routelist from "./Routelist";
import {Table} from "react-bootstrap";

class Routeactivitytable extends Component {
  renderTableName(direction) {
    return direction.map((bus, index) => {
      let desName = bus.MonitoredVehicleJourney.DestinationName;
      return desName;
    });
  }

  renderName(array) {
    return array[0];
  }

  renderTableHeader() {
    let header = ["Next Stop", "Congestion", "Delay", "Latitude", "Longitude"];
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData0(next) {
    return this.props.directionRef0.map((bus, index) => {
      let vehId = bus.MonitoredVehicleJourney.VehicleRef;
      let lat = bus.MonitoredVehicleJourney.VehicleLocation.Latitude;
      let long = bus.MonitoredVehicleJourney.VehicleLocation.Longitude;
      let nextStop = bus.MonitoredVehicleJourney.MonitoredCall.StopPointName;
      return (
        <tr key={vehId}>
          <td>{nextStop}</td>
          <td>{"Normal"}</td>
          <td>{"No delay"}</td>
          <td>{lat}</td>
          <td>{long}</td>
        </tr>
      );
    });
  }

  renderTableData1() {
    return this.props.directionRef1.map((bus, index) => {
      let vehId = bus.MonitoredVehicleJourney.VehicleRef;
      let lat = bus.MonitoredVehicleJourney.VehicleLocation.Latitude;
      let long = bus.MonitoredVehicleJourney.VehicleLocation.Longitude;
      let nextStop = bus.MonitoredVehicleJourney.MonitoredCall.StopPointName;
      return (
        <tr key={vehId}>
          <td>{nextStop}</td>
          <td>{"Normal"}</td>
          <td>{"No delay"}</td>
          <td>{lat}</td>
          <td>{long}</td>
        </tr>
      );
    });
  }

  render() {
    const {directionRef0, directionRef1} = this.props;
    console.log(this.props.selected_route);
    console.log(directionRef0);
    console.log(directionRef1);

    return (
      <div>
        <h3 id="title">ACTIVITY REAL TIME TRACKER</h3>
        <h4>
          {this.renderName(this.renderTableName(this.props.directionRef0))}
        </h4>
        <table className="table table-sm" id="dir0_activity_table">
          <thead>
            <tr>{this.renderTableHeader(this.props.directionRef0)}</tr>
          </thead>
          <tbody>{this.renderTableData0()}</tbody>
        </table>

        <h4>
          {this.renderName(this.renderTableName(this.props.directionRef1))}
        </h4>
        <table className="table table-sm" id="dir1_activity_table">
          <thead>
            <tr>{this.renderTableHeader(this.props.directionRef1)}</tr>
          </thead>
          <tbody>{this.renderTableData1()}</tbody>
        </table>

        <Routelist
          selected_route={this.props.selected_route}
          directionRef0={this.props.directionRef0}
          directionRef1={this.props.directionRef1}
        />
      </div>
    );
  }
}

export default Routeactivitytable;
