export const getRandomUser = () => {
  return async (dispatch, getState) => {
    const result = await fetch("https://api.randomuser.me/");
    const resultJson = await result.json();
    dispatch(getRandomUserSuccess(resultJson.results));
  };
};

export const getRandomUserSuccess = user => ({
  type: "RANDOM_USER_SUCCESS",
  user
});
