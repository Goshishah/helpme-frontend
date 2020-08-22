import { getAuthToken } from "./authService";

export const usersService = ({ type }) => {
  return fetch(`/users?type=${type}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAuthToken()}`,
      mode: "no-cors",
    },
  }).then((response) => response.json());
};
