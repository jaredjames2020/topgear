import React, {Component} from "react";

class Routelist extends Component {
  state = {
    route_data: []
  };

  async componentDidMount() {
    const res = await fetch("http://localhost:3001/api/routes");
    const data = await res.json();
    this.setState({route_data: data});
  }

  renderTableName(direction) {
    return direction.map((bus, index) => {
      let desName = bus.MonitoredVehicleJourney.DestinationName;
      return desName;
    });
  }

  renderName(array) {
    return array[0];
  }

  renderRouteInfo() {
    return this.state.route_data.filter(
      route => route.bus_line_name === this.props.selected_route
    );
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
    console.log(this.state.route_data);
    console.log(this.renderStopName(this.renderStopList()));

    return (
      <div>
        <h3 id="title">Route: {this.props.selected_route}</h3>
        <h4>
          To: {this.renderName(this.renderTableName(this.props.directionRef0))}
        </h4>
        <table id="dir0_activity_table">
          <tbody>{this.renderStopName(this.renderStopList())}</tbody>
        </table>
        <h4>
          To: {this.renderName(this.renderTableName(this.props.directionRef1))}
        </h4>
        <table id="dir1_activity_table">
          <tbody>{this.renderStopName(this.renderStopList()).reverse()}</tbody>
        </table>

        <button onClick={this.handleOnClick}>Search more routes</button>
      </div>
    );
  }
}
export default Routelist;
