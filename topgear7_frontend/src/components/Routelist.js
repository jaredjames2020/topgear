import React, {Component} from "react";

class Routelist extends Component {
  state = {
    route_data: [],
    input_route_search: "",
    selected_route: ""
  };

  async componentDidMount() {
    const res = await fetch("http://localhost:3001/api/buses");
    const data = await res.json();
    this.setState({route_data: data});
  }

  inputHandleOnChange = event => {
    this.setState({input_route_search: event.target.value});
  };

  selectedHandleOnChange = event => {
    this.setState({selected_route: event.target.value});
  };

  render() {
    const {input_route_search} = this.state;
    const filteredRoutes = this.state.route_data.filter(route => {
      if (input_route_search !== "") {
        return (
          route.route_name
            .toLowerCase()
            .indexOf(input_route_search.toLowerCase()) !== -1
        );
      }
    });

    return (
      <div>
        <input
          name="text"
          type="text"
          placeholder="Search Bus Routes"
          onChange={this.inputHandleOnChange}
        />
        <input type="submit" />
        <select id="route_name" onChange={this.selectedHandleOnChange}>
          {filteredRoutes.reverse().map((name, i) => (
            <option value={name.route_name} key={i}>
              {name.route_name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
export default Routelist;
