export default function situationReducer(
  state = {
    situations: [],
    loading: false
  },
  action
) {
  switch (action.type) {
    case "LOAD_SITUATIONS":
      console.log("LOAD_Sit");
      return {...state, situations: [...state.situations], loading: true};

    case "ADD_SITUATIONS":
      console.log("TTT");
      return {
        ...state,
        situations: action.situations,
        loading: false
      };

    default:
      return state;
  }
}
