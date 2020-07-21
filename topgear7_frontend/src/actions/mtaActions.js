import axios from "axios";

export const fetchMTABus = () => {
  const API_ENDPOINT = "http://localhost:5000/vehicle";
  return async dispatch => {
    dispatch({type: "LOAD_MTA"});
    const response = await axios.get(API_ENDPOINT);
    const data = response.data;
    const bus_data =
      data.Siri.ServiceDelivery.VehicleMonitoringDelivery[0].VehicleActivity;
    dispatch({
      type: "ADD_BUSES",
      bus_data
    });
  };
};
