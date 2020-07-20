import React, {Component} from "react";
import {Form, InputGroup, Col, Table, Container} from "react-bootstrap";

class Routelist extends Component {
  constructor() {
    super();
    this.state = {
      route_data: [],
      input_route_search: "",
      selected_route: "",
      directionRef0: [],
      directionRef1: []
    };
  }

  async componentDidMount() {
    const res = await fetch("http://localhost:3001/api/routes");
    const data = await res.json();
    this.setState({route_data: data});
  }

  inputHandleOnChange = event => {
    this.setState({input_route_search: event.target.value});
  };

  selectedHandleOnChange = event => {
    this.setState({selected_route: event.target.value});
  };

  getRouteInfo = () => {
    return this.state.route_data.filter(
      route => route.bus_line_name === this.state.selected_route
    );
  };

  getTableNameDes = () => {
    return this.getRouteInfo().map((bus, index) => {
      let desName = bus.service_destination;
      return desName;
    });
  };

  getTableNameOri = () => {
    return this.getRouteInfo().map((bus, index) => {
      let oriName = bus.service_origin;
      return oriName;
    });
  };

  getStopList = () => {
    let stoplist = [];
    this.getRouteInfo().forEach(stop => stoplist.push(stop.service_stops));
    return stoplist;
  };

  getStopName = array => {
    let stopnames = [];
    let stops = array;
    let names = stops.toString().split(", ");
    for (var i = 0; i < names.length; i++) {
      stopnames.push(
        <tr key={i}>
          <td key={[i]}>{names[i]}</td>
        </tr>
      );
    }
    return stopnames;
  };

  render() {
    const {input_route_search} = this.state;

    const inputFilteredRoutes = this.state.route_data.filter(route => {
      if (input_route_search !== "") {
        return (
          route.bus_line_name
            .toLowerCase()
            .indexOf(input_route_search.toLowerCase()) !== -1
        );
      }
    });

    const uniqueRoutes = inputFilteredRoutes
      .reverse()
      .map(name => name.bus_line_name);

    let unique = [...new Set(uniqueRoutes)].sort();

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
          <Container>
            <p id="title">Route: {this.state.selected_route}</p>
            <p>To: {this.getTableNameDes()}</p>
            <Table striped bordered hover size="auto" id="dir0_activity_table">
              <tbody>{this.getStopName(this.getStopList())}</tbody>
            </Table>

            <br></br>
            <p>To: {this.getTableNameOri()}</p>
            <Table striped bordered hover size="auto" id="dir1_activity_table">
              <tbody>{this.getStopName(this.getStopList()).reverse()}</tbody>
            </Table>
          </Container>
        ) : null}
      </div>
    );
  }
}
export default Routelist;
