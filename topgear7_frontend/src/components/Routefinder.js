import React, {Component} from "react";
import ActivityContainer from "../containers/ActivityContainer";
import Routeactivitytable from "./Routeactivitytable";
import MTAGooglemap from "./MTAGooglemap";

class Routefinder extends Component {
  constructor() {
    super();
    this.state = {
      input_route_search: "",
      selected_route: "",
      directionRef0: [],
      directionRef1: []
    };
  }

  inputHandleOnChange = event => {
    this.setState({input_route_search: event.target.value});
  };

  selectedHandleOnChange = event => {
    this.setState({selected_route: event.target.value});
  };

  render() {
    console.log(this.props.directionRef1);
    const {input_route_search} = this.state;

    const inputFilteredRoutes = this.props.vehicleActivity.filter(route => {
      if (input_route_search !== "") {
        return (
          route.MonitoredVehicleJourney.PublishedLineName.toLowerCase().indexOf(
            input_route_search.toLowerCase()
          ) !== -1
        );
      }
    });

    const uniqueRoutes = inputFilteredRoutes
      .reverse()
      .map(name => name.MonitoredVehicleJourney.PublishedLineName);

    const sortAlphaNum = (a, b) => a.localeCompare(b, "en", {numeric: true});

    let unique = [...new Set(uniqueRoutes)].sort(sortAlphaNum);

    const directionRef0 = inputFilteredRoutes.filter(
      route =>
        route.MonitoredVehicleJourney.PublishedLineName.toLowerCase() ===
          this.state.selected_route.toLowerCase() &&
        route.MonitoredVehicleJourney.DirectionRef === "0"
    );

    const directionRef1 = inputFilteredRoutes.filter(
      route =>
        route.MonitoredVehicleJourney.PublishedLineName.toLowerCase() ===
          this.state.selected_route.toLowerCase() &&
        route.MonitoredVehicleJourney.DirectionRef === "1"
    );

    return (
      <div>
        <input
          name="text"
          type="text"
          placeholder="Search Bus Routes"
          onChange={this.inputHandleOnChange}
        />
        <select id="route_name" onChange={this.selectedHandleOnChange}>
          {" "}
          {unique.map((name, i) => (
            <option value={name} key={i}>
              {name}
            </option>
          ))}
        </select>
        <Routeactivitytable
          selected_route={this.state.selected_route}
          directionRef0={directionRef0}
          directionRef1={directionRef1}
        />
        <MTAGooglemap
          directionRef0={directionRef0}
          directionRef1={directionRef1}
        />
      </div>
    );
  }
}
//refactor dropdown to a selectable table
//remove submit from input "type=submit"
//set default value to the selected_route
// <ActivityContainer
//   selected_route={this.state.selected_route}
//   directionRef0={directionRef0}
//   directionRef1={directionRef1}
// />
export default Routefinder;
