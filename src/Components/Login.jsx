import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../App";

export default function Login() {
  const Navigate = useNavigate();
  const { customers, currentCustomer, setCurrentCustomer } = useContext(AppContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const handleLogin = () => {
    const found = customers.find(
      (value) => value.email === email && value.password === password
    );
    if (found) {
        setCurrentCustomer(found);
        console.log(found);
      Navigate("/");
    } else {
      setErrorMessage("Customer is not registered.");
    }
  };

  // const handleRegister = () =>{
  //     Navigate("/register");
  // }
  return (
    <div>
      <h1>Login</h1>
      <p>
        <input
          type="text"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </p>
      <p>
        <button onClick={handleLogin}>Login</button>
      </p>
      <p>
        <button onClick={() => Navigate("/register")}>Register Customer</button>
      </p>
      <p>{errorMessage}</p>
    </div>
  );
}
