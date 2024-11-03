import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { useDispatch } from "react-redux";
import { login } from "./authSlice";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn)
  const handleLogin = (event) => {
    event.preventDefault();
    const userInfo = {
      username: event.target["username"].value,
      password: event.target["password"].value,
    };
    dispatch(login(userInfo));
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    }
  }, [isLoggedIn]);
  return (
    <>
      <div className="login-container container-fluid d-flex flex-column justify-content-center align-items-center">
        <div className="login-box">
          <h2 className="text-center mb-4">Login</h2>
          <form method="post" onSubmit={handleLogin}>
            <div className="d-flex flex-column gap-3">
              <div className="flex-fill">
                <TextField
                  required
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
                  required
                  color="dark"
                  type="password"
                  id="password"
                  name="password"
                  label="Password"
                  className="w-100"
                  variant="standard"
                />
              </div>
              <div>
                <Link to={`/auth/forgotpassword`}>Forgot Password?</Link>
              </div>
              <div className="flex-fill mt-3">
                <Button type="submit" variant="outlined" fullWidth color="dark">
                  Login
                </Button>
              </div>
              <div className="flex-fill text-center mt-3">
                <span>Don't have an account?</span>
                <span>&nbsp;</span>
                <Link to={`/auth/register`}>Register</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
