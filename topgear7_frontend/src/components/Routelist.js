import React, {Component} from "react";

class Routelist extends Component {
  state = {
    route_data: []
  };

  async componentDidMount() {
    const res = await fetch("http://localhost:3001/api/buses");
    const data = await res.json();
    this.setState({route_data: data});
  }

  render() {
    return (
      <div>
        <h1> HOME </h1>
      </div>
    );
  }
}
export default Routelist;
