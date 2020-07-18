import React, {Component} from "react";

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

  renderRouteInfo() {
    return this.state.route_data.filter(
      route => route.bus_line_name === this.state.selected_route
    );
  }

  renderTableNameDes() {
    return this.renderRouteInfo().map((bus, index) => {
      let desName = bus.service_destination;
      return desName;
    });
  }

  renderTableNameOri() {
    return this.renderRouteInfo().map((bus, index) => {
      let oriName = bus.service_origin;
      return oriName;
    });
  }

  renderStopList() {
    let yup = [];
    this.renderRouteInfo().forEach(stop => yup.push(stop.service_stops));
    return yup;
  }

  renderStopName(array) {
    let go = [];
    let stops = array;
    let run = stops.toString().split(", ");
    console.log(run);
    for (var i = 0; i < run.length; i++) {
      go.push(
        <tr key={i}>
          <td key={[i]}>{run[i]}</td>
        </tr>
      );
    }
    return go;
  }

  handleOnClick = event => {
    console.log("LINK TO ROUTES");
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
        <p id="title">Route: {this.props.selected_route}</p>
        <p>To: {this.renderTableNameDes()}</p>
        <table id="dir0_activity_table">
          <tbody>{this.renderStopName(this.renderStopList())}</tbody>
        </table>
        <br></br>
        <p>To: {this.renderTableNameOri()}</p>
        <table id="dir1_activity_table">
          <tbody>{this.renderStopName(this.renderStopList()).reverse()}</tbody>
        </table>
      </div>
    );
  }
}
export default Routelist;
// <p id="title">Route: {this.props.selected_route}</p>
// <p>
//   To: {this.renderName(this.renderTableName(this.props.directionRef0))}
// </p>
// <table id="dir0_activity_table">
//   <tbody>{this.renderStopName(this.renderStopList())}</tbody>
// </table>
// <p>
//   To: {this.renderName(this.renderTableName(this.props.directionRef1))}
// </p>
// <table id="dir1_activity_table">
//   <tbody>{this.renderStopName(this.renderStopList()).reverse()}</tbody>
// </table>
// <button onClick={this.handleOnClick}>Search more routes</button>
