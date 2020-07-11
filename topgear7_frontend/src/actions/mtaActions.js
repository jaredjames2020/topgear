export const fetchMTABus = () => {
  const API_ENDPOINT = "http://localhost:5000/vehicle";
  return dispatch => {
    dispatch({type: "LOAD_MTA"});
    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(vehicle => {
        dispatch({
          type: "ADD_BUSES"
          // data:
          //   data.Siri.ServiceDelivery.VehicleMonitoringDelivery[0]
          //     .VehicleActivity
        });
      })
      .catch(error => console.log(error));
  };
};

// async componentDidMount() {
//   await fetch("http://localhost:5000/vehicle")
//     .then(resp => resp.json())
//     .then(data => {
//       const bus_activity =
//         data.Siri.ServiceDelivery.VehicleMonitoringDelivery[0]
//           .VehicleActivity;
//       this.setState({mta_vehicle_activity: bus_activity});
//     });
// }
