import React from "react";
import { login, logout } from "./slices/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const newUser = {
    name: "no k.",
    email: "no@asif.com",
    location: "no's home",
    phone: "0123130123120",
  };
  return (
    <div className="actions">
      <button
        onClick={(e) => {
          dispatch(login(newUser));
        }}
      >
        Login
      </button>
      <button
        onClick={(e) => {
          dispatch(logout(newUser));
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Login;
