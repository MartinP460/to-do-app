export const filterChange = (filter) => ({
  type: "SET_FILTER",
  filter,
});

// eslint-disable-next-line default-param-last
const filterReducer = (state = "ALL", action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
