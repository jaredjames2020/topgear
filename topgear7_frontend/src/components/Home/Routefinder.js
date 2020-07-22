import React, {Component} from "react";
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
    const {input_route_search, selected_route} = this.state;

    const inputFilteredRoutes = this.props.vehicleActivity.filter(routes => {
      if (input_route_search !== "") {
        return (
          routes.MonitoredVehicleJourney.PublishedLineName.toLowerCase().indexOf(
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
          selected_route.toLowerCase() &&
        route.MonitoredVehicleJourney.DirectionRef === "0"
    );

    const directionRef1 = inputFilteredRoutes.filter(
      route =>
        route.MonitoredVehicleJourney.PublishedLineName.toLowerCase() ===
          selected_route.toLowerCase() &&
        route.MonitoredVehicleJourney.DirectionRef === "1"
    );

    return (
      <div className="routefinder">
        <div className="finder-bars">
          <div className="route-input">
            <h4>FIND AND TRACK BUS</h4>
            <input
              name="text"
              type="text"
              placeholder="Search Bus Routes"
              onChange={this.inputHandleOnChange}
            />
          </div>
          <div className="route-dropdown">
            <h4>SELECT BUS</h4>
            {this.props.vehicleActivity.length !== 0 ? (
              <select id="route_name" onChange={this.selectedHandleOnChange}>
                {" "}
                {unique.map((name, i) => (
                  <option value={name} key={i}>
                    {name}
                  </option>
                ))}
              </select>
            ) : (
              <h3>LOADING</h3>
            )}
          </div>
        </div>
        {this.state.selected_route ? (
          <Routeactivitytable
            selected_route={this.state.selected_route}
            directionRef0={directionRef0}
            directionRef1={directionRef1}
          />
        ) : null}
        <MTAGooglemap
          directionRef0={directionRef0}
          directionRef1={directionRef1}
        />
      </div>
    );
  }
}

export default Routefinder;
