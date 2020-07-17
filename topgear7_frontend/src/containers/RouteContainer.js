import React, {Component} from "react";
import Routelist from "../components/Routelist";

class RouteContainer extends Component {
  render() {
    return (
      <div>
        ROUTES
        <Routelist
          selected_route={this.props.selected_route}
          directionRef0={this.props.directionRef0}
          directionRef1={this.props.directionRef1}
        />
      </div>
    );
  }
}

export default RouteContainer;
