export const sortChange = (sort) => ({
  type: "SET_SORT",
  sort,
});

// eslint-disable-next-line default-param-last
const sortReducer = (state = "TIME", action) => {
  switch (action.type) {
    case "SET_SORT":
      return action.sort;
    default:
      return state;
  }
};

export default sortReducer;
