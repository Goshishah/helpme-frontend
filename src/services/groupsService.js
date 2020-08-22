import { getAuthToken } from "./authService";

export const getGroupsService = () => {
  return fetch(`/groups`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAuthToken()}`,
      mode: "no-cors",
    },
  }).then((response) => response.json());
};

export const addGroupservice = (group) => {
  return fetch(`/groups`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAuthToken()}`,
      mode: "no-cors",
    },
    body: JSON.stringify(group),
  }).then((response) => response.json());
};

export const updateGroupsService = (group) => {
  return fetch(`/groups`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAuthToken()}`,
      mode: "no-cors",
    },
    body: JSON.stringify(group),
  }).then((response) => response.json());
};

export const deleteGroupsService = (group) => {
  return fetch(`/groups`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAuthToken()}`,
      mode: "no-cors",
    },
    body: JSON.stringify(group),
  }).then((response) => response.json());
};
