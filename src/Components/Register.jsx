import React, { useState } from "react";
import { AppContext } from "../App";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Register() {
  const { customers, setCustomers } = useContext(AppContext);
  const [customer, setCustomer] = useState({});
  const Navigate = useNavigate();
  const handleRegister = () =>{
    setCustomers([...customers,customer]);
    Navigate("/login");
  }
  return (
    <div>
      <h1>Register</h1>
      <p>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
        ></input>
      </p>
      <p>
        <input
          type="text"
          placeholder="Email Address"
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
        ></input>
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setCustomer({ ...customer, password: e.target.value })
          }
        ></input>
      </p>
      <p>
        <button onClick = {handleRegister}>Register Customer</button>
      </p>
    </div>
  );
}
