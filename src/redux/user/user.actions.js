import { SET_CURRENT_USER } from "./users.types";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});
