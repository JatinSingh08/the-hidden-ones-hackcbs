import axios from "axios";
import React from "react";
import { useState } from "react";
// import Header from "../Header/Header";
import Header from "./Header";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bloodgroup, setBloodgroup] = useState("");
  const [bp, setBp] = useState("");
  const [dob, setDob] = useState(undefined);

  const [success, setSuccess] = useState(0); // whenever success reponse got, show alert.

  const registerData = async (e) => {
    e.preventDefault();
    console.log(name, age, bloodgroup, bp, dob);

    // send data to backend
    const response = await axios.post("http://localhost:8000/user/create", {
      name: name,
      age: age,
      bloodgroup: bloodgroup,
      bp: bp,
      dob: dob,
    });

    response.status === 200 ? setSuccess(1) : setSuccess(-1); // set Success or Not

    setName("");
    setAge("");
    setBloodgroup("");
    setBp("");
    setDob(new Date());
  };

  return (
    <div className="Register">
      <Header />
      <div className="Status">
        {success === 1 ? (
          <p className="SuccessMessage">
            Your Response was Recorded Successfully!
          </p>
        ) : (
          <></>
        )}

        {success === -1 ? (
          <p className="FailureMessage">Some Error Occured!</p>
        ) : (
          <></>
        )}
      </div>
      <div className="Heading">Register</div>
      <form className="RegisterForm" method="post" onSubmit={registerData} action='/user/create'>
        <input
          className="FormInput"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="FormInput"
          type="Number"
          name="age"
          id="age"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          className="FormInput"
          type="text"
          name="bloodgroup"
          id="bloodgroup"
          placeholder="Blood Group"
          value={bloodgroup}
          onChange={(e) => setBloodgroup(e.target.value)}
        />
        <input
          className="FormInput"
          type="text"
          name="bp"
          id="bp"
          placeholder="Blood Pressure"
          value={bp}
          onChange={(e) => setBp(e.target.value)}
        />
        <div className="DobSelect">
          <span>Date of Birth:</span>
          <input
            className="DobInput"
            type="date"
            name="dob"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="button-container">

          <button type="Submit" className="FormInput Submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;