import React, {Component} from "react";
import "./App.css";
import Routelist from "./components/Routelist";
import Routestatus from "./components/Routestatus";

console.log(process.env.REACT_APP_MTA_API_KEY);

class App extends Component {
  state = {
    mta_vehicle_activity: []
  };

  async componentDidMount() {
    await fetch("http://localhost:5000/vehicle")
      .then(resp => resp.json())
      .then(data => {
        const bus_activity =
          data.Siri.ServiceDelivery.VehicleMonitoringDelivery[0]
            .VehicleActivity;
        this.setState({mta_vehicle_activity: bus_activity});
      });
  }

  render() {
    return (
      <div>
        <Routelist />
        <Routestatus activity={this.state.mta_vehicle_activity} />
      </div>
    );
  }
}

export default App;
