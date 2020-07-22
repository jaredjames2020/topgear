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

    const inputFilteredRoutes = this.state.route_data.filter(routes => {
      if (input_route_search !== "") {
        return (
          routes.bus_line_name
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
      <div className="route-search">
        <div className="finder-bars">
          <div>
            <h4>SEARCH BUS ROUTE STOPS</h4>
          </div>
          <input
            className="search"
            name="text"
            type="text"
            placeholder="Search Bus Routes"
            onChange={this.inputHandleOnChange}
          ></input>
          <div className="route-stops-dropdown">
            {this.state.route_data.length !== 0 ? (
              <select onChange={this.selectedHandleOnChange}>
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

        <div className="route-stops-tabledata">
          {this.state.selected_route ? (
            <div className="stops-tabledata-container">
              <div className="stops-route-title">
                <h1>{this.state.selected_route}</h1>
              </div>
              <div className="stops-tables">
                <div className="stops-table-desinfo">
                  <h4>{this.getTableNameDes()}</h4>

                  <table
                    className="route-stops-destable"
                    striped
                    bordered
                    hover
                    id="dir0_activity_table"
                  >
                    <tbody>{this.getStopName(this.getStopList())}</tbody>
                  </table>
                </div>

                <br></br>
                <div className="stops-table-oriinfo">
                  <h4>{this.getTableNameOri()}</h4>

                  <table
                    className="route-stops-oritable"
                    striped
                    bordered
                    hover
                    id="dir1_activity_table"
                  >
                    <tbody>
                      {this.getStopName(this.getStopList()).reverse()}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
export default Routelist;
