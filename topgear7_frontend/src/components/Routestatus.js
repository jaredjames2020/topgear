import React, {Component} from "react";

class Routestatus extends Component {
  render() {
    const linename = this.props.activity.map(
      bus => bus.MonitoredVehicleJourney
    );

    const filteredJourney = linename.filter(
      route => route.PublishedLineName === "Q83" //make dynamic by passing props back up from routelist
    );

    let direction_alpha = filteredJourney.filter(
      direction => direction.DirectionRef === "0"
    );
    let direction_beta = filteredJourney.filter(
      direction => direction.DirectionRef === "1"
    );

    console.log(linename);
    console.log(direction_alpha);

    return (
      <div>
        <h4>ORIGIN</h4>
        <ul>
          {direction_alpha.map((value, index) => {
            return (
              <li key={index}>
                {value.MonitoredCall.StopPointName}------
                {value.MonitoredCall.Extensions.Distances.PresentableDistance}
                ------
                {value.VehicleLocation.Latitude}------
                {value.VehicleLocation.Longitude}
              </li>
            );
          })}
        </ul>

        <h4>DESTINATION</h4>
        <ul>
          {direction_beta.map((value, index) => {
            return (
              <li key={index}>
                {value.MonitoredCall.StopPointName}------
                {value.MonitoredCall.Extensions.Distances.PresentableDistance}
                ------
                {value.VehicleLocation.Latitude}------
                {value.VehicleLocation.Longitude}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Routestatus;
