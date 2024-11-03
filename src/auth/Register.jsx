import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { register } from "./authSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn)
  const handleRegister = (event) => {
    event.preventDefault();
    const userInfo = {
      firstname: event.target["firstname"].value,
      lastname: event.target["lastname"].value,
      username: event.target["username"].value,
      password1: event.target["password1"].value,
      password2: event.target["password2"].value,
    };
    dispatch(register(userInfo));
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard/home')
    }
  }, [isLoggedIn]);

  return (
    <>
      <div className="login-container container-fluid d-flex flex-column justify-content-center align-items-center">
        <div className="login-box">
          <h2 className="text-center mb-4">Register</h2>
          <form method="post" onSubmit={handleRegister}>
            <div className="d-flex flex-column gap-3">
              <div className="flex-fill d-flex gap-2">
                <div>
                  <TextField
                    color="dark"
                    type="text"
                    id="firstname"
                    name="firstname"
                    label="First Name"
                    className="w-100"
                    variant="standard"
                  />
                </div>
                <div>
                  <TextField
                    color="dark"
                    type="text"
                    id="lastname"
                    name="lastname"
                    label="Last Name"
                    className="w-100"
                    variant="standard"
                  />
                </div>
              </div>
              <div className="flex-fill">
                <TextField
                  color="dark"
                  type="text"
                  id="username"
                  name="username"
                  label="User Name"
                  className="w-100"
                  variant="standard"
                />
              </div>
              <div className="flex-fill">
                <TextField
                  color="dark"
                  type="password"
                  id="password1"
                  name="password1"
                  label="Password"
                  className="w-100"
                  variant="standard"
                />
              </div>
              <div className="flex-fill">
                <TextField
                  color="dark"
                  type="password"
                  id="password2"
                  name="password2"
                  label="Repeat Password"
                  className="w-100"
                  variant="standard"
                />
              </div>
              <div className="flex-fill mt-3">
                <Button type="submit" variant="outlined" fullWidth color="dark">
                  Register
                </Button>
              </div>
              <div className="flex-fill text-center mt-3">
                <span>Already have an account?</span>
                <span>&nbsp;</span>
                <Link to={`/auth/login`}>Login</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
