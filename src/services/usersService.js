export const usersService = () => {
  return fetch("/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      mode: "no-cors",
    },
  }).then((response) => response.json());
};
