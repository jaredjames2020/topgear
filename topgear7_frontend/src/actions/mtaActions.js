export const fetchMTABus = () => {
  const API_ENDPOINT = "http://localhost:5000/vehicle";
  return dispatch => {
    dispatch({type: "LOAD_MTA"});
    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(bus_data => {
        dispatch({
          type: "ADD_BUSES",
          bus_data
        });
      })
      .catch(error => console.log(error));
  };
};
