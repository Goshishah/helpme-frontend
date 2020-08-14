export const loginService = ({ email, password }) => {
  return fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      mode: "no-cors",
    },
    body: JSON.stringify({ email, password }),
  }).then((response) => response.json());
};
