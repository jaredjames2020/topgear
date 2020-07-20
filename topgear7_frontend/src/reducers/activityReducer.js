export default function activityReducer(
  state = {
    currentActivity: [],
    loading: false
  },
  action
) {
  switch (action.type) {
    case "LOAD_ACTIVITY":
      console.log("HIT Activity reducer load");
      return {
        ...state,
        currentActivity: [...state.currentActivity],
        loading: true
      };

    case "ADD_ACTIVITY":
      console.log("HIT activity reducer add");
      return {
        ...state,
        currentActivity: action.currentActivity,
        loading: false
      };

    default:
      return state;
  }
}
