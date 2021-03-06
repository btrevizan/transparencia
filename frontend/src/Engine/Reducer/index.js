const initialState = {
  result: null,
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "RESULT_LOADED":
      return {
        ...state,
        result: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
