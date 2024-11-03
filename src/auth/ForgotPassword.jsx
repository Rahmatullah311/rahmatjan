import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const ForgotPassword = () => {
  return (
    <>
      <div className="login-container container-fluid d-flex flex-column justify-content-center align-items-center">
        <div className="login-box">
          <h2 className="text-center mb-4">Find Account</h2>
          <form method="post">
            <div className="d-flex flex-column gap-3">
              <div className="flex-fill">
                <TextField
                color="dark"
                  type="text"
                  id="username"
                  name="username"
                  label="Email Address"
                  className="w-100"
                  variant="standard"
                />
              </div>
              <div className="flex-fill mt-3">
                <Button type="submit" variant="outlined" fullWidth color="dark">
                  Find Account
                </Button>
              </div>
              <div className="flex-fill text-center mt-3">
                <Link to={`/auth/login`}>Login with credentials</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
