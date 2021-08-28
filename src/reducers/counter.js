const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCRIMENT":
      return state + 1;
    case "DECRIMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
