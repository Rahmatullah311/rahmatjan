import React from "react";
import { CircularProgress } from "@mui/material";
const Preloaders = () => {
  return (
    <div className="d-flex flex-column justify-content-center justify-items-center text-center" style={{height: '100vh'}}>
      <div>
        <CircularProgress />
      </div>
    </div>
  );
};

export default Preloaders;
