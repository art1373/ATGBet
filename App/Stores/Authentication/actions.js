import { LOGIN } from "./constants";

export const login = (email, password) => {
  return {
    type: LOGIN,
    email,
    password,
  };
};
