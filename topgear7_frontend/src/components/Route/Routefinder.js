import React, {Component} from "react";
import Routeactivitytable from "./Routeactivitytable";
import MTAGooglemap from "../Home/MTAGooglemap";
import {Form, InputGroup, Col} from "react-bootstrap";

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
      <div>
        <Form.Group>
          <Form.Row>
            <Col xs="auto">
              <InputGroup>
                <Form.Control
                  name="text"
                  type="text"
                  placeholder="Search Bus Routes"
                  onChange={this.inputHandleOnChange}
                ></Form.Control>
              </InputGroup>
            </Col>
            <Col xs="auto">
              <Form.Control
                as="select"
                id="route_name"
                onChange={this.selectedHandleOnChange}
              >
                {" "}
                {unique.map((name, i) => (
                  <option value={name} key={i}>
                    {name}
                  </option>
                ))}
              </Form.Control>
            </Col>
          </Form.Row>
        </Form.Group>
        {this.state.selected_route ? (
          <Routeactivitytable
            selected_route={selected_route}
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
