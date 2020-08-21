import { getAuthToken } from "./authService";

export const usersService = () => {
  return fetch("/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAuthToken()}`,
      mode: "no-cors",
    },
  }).then((response) => response.json());
};
