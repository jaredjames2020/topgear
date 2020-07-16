import React, {Component} from "react";
import ActivityContainer from "../containers/ActivityContainer";

class Routefinder extends Component {
  // state = {
  //   input_route_search: "",
  //   selected_route: "",
  //   directionRef0: [],
  //   directionRef1: []
  // };
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

    let unique = [...new Set(uniqueRoutes)].sort();

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

    console.log(this.props.vehicleActivity);
    console.log(inputFilteredRoutes);
    console.log(uniqueRoutes);
    console.log(unique.sort());
    console.log(this.state.selected_route);
    console.log(directionRef0);
    console.log(directionRef1);

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
        <ActivityContainer
          selected_route={this.state.selected_route}
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
export default Routefinder;
