export const fetchSituations = () => {
  const API_ENDPOINT = "http://localhost:5000/vehicle";
  return dispatch => {
    dispatch({type: "LOAD_SITUATIONS"});
    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: "ADD_SITUATIONS",
          situations:
            data.Siri.ServiceDelivery.SituationExchangeDelivery[0].Situations,
          loading: "true"
        });
      })

      .catch(error => console.error(error));
  };
};
