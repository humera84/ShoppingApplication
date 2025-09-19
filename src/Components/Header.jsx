import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Header() {
  const { currentCustomer } = useContext(AppContext);
  const appName = import.meta.env.VITE_APP_NAME
  return (
    <div>
      <h1 style={{ backgroundColor: "yellow" }}>{appName}</h1>
      <Link to="/">Home</Link> &nbsp; &nbsp;|
      <Link to="/cart">Cart</Link>&nbsp; &nbsp;|
      {Object.keys(currentCustomer).length === 0 ? (
        <Link to="/login">Login</Link>
      ) : (
         <Link to="/profile">Profile</Link>
      )}
      &nbsp; &nbsp;|
      <Link to="/home2">Home2</Link>
    </div>
  );
}
