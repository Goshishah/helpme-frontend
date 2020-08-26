import { getAuthToken } from "./authService";

export const addBeneficiaryDetailAPI = (params) => {
  return fetch(`/beneficiary-details`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAuthToken()}`,
      mode: "no-cors",
    },
    body: JSON.stringify(params),
  }).then((response) => response.json());
};

export const getBeneficiariesDetailAPI = () => {
  return fetch(`/beneficiary-details`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      mode: "no-cors",
    },
  }).then((response) => response.json());
};

export const getBeneficiariesDetailByIdAPI = (id) => {
  return fetch(`/beneficiary-details/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      mode: "no-cors",
    },
  }).then((response) => response.json());
};
