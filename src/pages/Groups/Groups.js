import React, { useState, useEffect } from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import { usersService } from "../../services/usersService";
import { useHistory } from "react-router-dom";
import { routesPath } from "../../routes/routesConfig";
import "./groups.scss";
import AddGroup from "./AddGroup";
import { getGroupsService } from "../../services/groupsService";

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const loadGroups = () => {
    getGroupsService()
      .then((response) => {
        const { success, data } = response;
        if (success) {
          setGroups(data);
        }
      })
      .catch((error) => {
        console.log("groupsService", error);
      });
  };
  useEffect(() => {
    loadGroups();
  }, []);

  return (
    <div className="groups-page">
      <AppHeader />
      <h1>
        <span
          className="back-arrow"
          onClick={() => history.push(routesPath.superadminHome)}
        >
          {"<"}
        </span>
        Groups
      </h1>
      <button onClick={() => setOpen(true)}>Create</button>
      {open ? (
        <AddGroup onClose={() => setOpen(false)} loadGroups={loadGroups} />
      ) : (
        <GroupsTable groups={groups} />
      )}
    </div>
  );
};

const GroupsTable = ({ groups }) => {
  return groups.length < 1 ? (
    <h3>No record</h3>
  ) : (
    <table>
      <thead>
        <tr align="left">
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Created Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {groups.map((user, index) => {
          const { name, email, address, created_on } = user;
          return (
            <tr key={email}>
              <td>{index + 1}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{address}</td>
              <td>{formatDate(created_on)}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Groups;
