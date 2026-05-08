import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import API from "./api";

import "../../styles/common.css";

function Register() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const register = async () => {
    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
        role: "student",
      });

      alert("Registration Successful");

      navigate("/Login");
    } catch (err) {
      console.log(err);

      alert("Register Failed");
    }
  };

  return (
    <div className="page-container">
      <div className="glass-card">
        <h1>Register</h1>

        <input
          type="text"
          placeholder="Enter Name"
          className="input-box"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="input-box"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="input-box"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn" onClick={register}>
          Register
        </button>

        <Link to="/Login">
          <p
            style={{
              marginTop: "20px",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            Already have account? Login
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Register;
