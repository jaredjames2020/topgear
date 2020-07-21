import axios from "axios";

export const fetchSituations = () => {
  const API_ENDPOINT = "http://localhost:5000/vehicle";
  return async dispatch => {
    dispatch({type: "LOAD_SITUATIONS"});
    const response = await axios.get(API_ENDPOINT);
    const data = response.data;
    const situations =
      data.Siri.ServiceDelivery.SituationExchangeDelivery[0].Situations;
    const loading = true;
    dispatch({
      type: "ADD_SITUATIONS",
      situations,
      loading
    });
  };
};
