export const registerService = ({
  firstname,
  lastname,
  username,
  email,
  password,
  roleName,
}) => {
  return fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      mode: "no-cors",
    },
    body: JSON.stringify({
      firstname,
      lastname,
      username,
      email,
      password,
      roleName,
    }),
  }).then((response) => response.json());
};

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

export const logoutService = ({ email, password }) => {
  return fetch("/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      mode: "no-cors",
    },
    body: JSON.stringify({ email }),
  }).then((response) => response.json());
};
