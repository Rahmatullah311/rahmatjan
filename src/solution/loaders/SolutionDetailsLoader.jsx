import React from "react";
import { Skeleton } from "@mui/material";

const SolutionDetailsLoader = () => {
  return (
    <div className="d-flex flex-column p-3">
      <div className="w-100">
        <Skeleton animation="wave" height={"70px"} className="w-50" />
      </div>
      <div className="w-100 mx-3">
        <Skeleton animation="wave" className="w-50" height={'40px'} />
        <Skeleton animation="wave" className="w-100" />
        <Skeleton animation="wave" className="w-100" />
        <Skeleton animation="wave" className="w-75" />
        <Skeleton animation="wave" className="w-100" height={"50px"} />
        <Skeleton animation="wave" className="w-100" height={"75px"} />
        <Skeleton animation="wave" className="w-100" height={"100px"} />
        <Skeleton animation="wave" className="w-100" height={"125px"} />
      </div>
    </div>
  );
};

export default SolutionDetailsLoader;
