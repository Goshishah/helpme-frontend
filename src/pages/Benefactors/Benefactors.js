import React, { useState, useEffect } from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import "./benefactors.scss";
import { usersService } from "../../services/usersService";

const Benefactors = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    usersService()
      .then((response) => {
        const { success, data } = response;
        if (success) {
          setUsers(data);
        }
      })
      .catch((error) => {
        console.log("usersService", error);
      });
  }, []);

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  return (
    <div className="benefactors-page">
      <AppHeader />
      <h1>Benefactors</h1>
      <table>
        <thead>
          <tr align="left">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Last Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            const { firstname, lastname, email, last_login } = user;
            return (
              <tr key={email}>
                <td>{index + 1}</td>
                <td>{`${firstname} ${lastname}`}</td>
                <td>{email}</td>
                <td>{formatDate(last_login)}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Benefactors;
