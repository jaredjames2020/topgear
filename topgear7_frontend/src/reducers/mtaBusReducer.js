export default function mtaBusReducer(
  state = {
    bus_data: [],
    situations: [],
    loading: false
  },
  action
) {
  switch (action.type) {
    case "LOAD_MTA":
      return {...state, bus_data: [...state.bus_data], loading: true};

    case "ADD_BUSES":
      return {
        ...state,
        bus_data: action.bus_data,
        loading: false
      };

    case "LOAD_SITUATIONS":
      return {...state, situations: [...state.situations], loading: true};

    case "ADD_SITUATIONS":
      return {
        ...state,
        situations: action.situations,
        loading: false
      };

    default:
      return state;
  }
}
