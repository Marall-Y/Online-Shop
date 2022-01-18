export const loginReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case "LOGIN-SUCCESS":
      return {
        ...state,
        user: action.payload.data,
      };
    default:
      return state;
  }
};
