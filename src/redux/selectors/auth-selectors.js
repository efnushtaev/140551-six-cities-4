export const getAuthStatus = (state) => {
  return state.auth.isAuth;
};
export const getUserEmail = (state) => {
  return state.auth.email;
};
export const getUserAvatar = (state) => {
  return state.auth.avatar_url;
};