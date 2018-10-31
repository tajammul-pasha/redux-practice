let user = [];

export default (state = user, action) => {
  switch (action.type) {
    case "RANDOM_USER_SUCCESS":
      console.log("User state", state);
      return [...state, ...action.user];
    default:
      return state;
  }
};
