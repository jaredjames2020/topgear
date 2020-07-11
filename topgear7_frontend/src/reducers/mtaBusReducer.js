export default function mtaBusReducer(
  state = {
    route_name: []
  },
  action
) {
  switch (action.type) {
    case "LOAD_MTA":
      const route_name = state.route_name.filter(
        route_name => route_name.id !== action.id
      );
      return {...state, route_name: [...state.route_name, route_name]};

    default:
      return state;
  }
}
