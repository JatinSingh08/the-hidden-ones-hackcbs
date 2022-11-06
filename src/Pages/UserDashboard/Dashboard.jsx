import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
// import Header from "";
import Header from "./Header";
import "./Dashboard.css";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/user").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="Dashboard">
      <Header />
      <div className="UsersTrack">
        <div className="UserHeader">
          <div className="Head">Name</div>
          <div className="Head">Age</div>
          <div className="Head">Blood Group</div>
          <div className="Head">Blood Pressure</div>
          <div className="Head">D.O.B</div>
        </div>
        <div className="Users">
          {data.map((user, key) => (
            <div className="User" key={key}>
              <div className="UserData Name">{user.name}</div>
              <div className="UserData Email">{user.age}</div>
              <div className="UserData Address">{user.bloodgroup}</div>
              <div className="UserData Contact">{user.bp}</div>
              <div className="UserData Dob">{user.dob.slice(0, 10)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;