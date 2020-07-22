import axios from "axios";

export function addCongestionActivity(activity) {
  return async dispatch => {
    const response = await axios.post("http://localhost:3001/api/activities", {
      vehicle: activity[0],
      congestion: activity[1]
    });
    const activity_data = response.data;
    dispatch({type: "ADD_CONGESTION_ACTIVITY", activity_data});
  };
}

export function addDelayActivity(activity) {
  return async dispatch => {
    const response = await axios.post("http://localhost:3001/api/activities", {
      vehicle: activity[0],
      delay: activity[1]
    });
    const activity_data = response.data;
    dispatch({type: "ADD_DELAY_ACTIVITY", activity_data});
  };
}
