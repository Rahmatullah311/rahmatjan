import React from "react";
import { Skeleton } from "@mui/material";
const SolutionsLoader = () => {
  return (
    <div>
      <div className="row">
        {[...Array(18)].map(() => (
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <Skeleton height={"150px"} />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <div className="d-flex gap-3">
              <div className="flex-fill">
                <Skeleton height={"50px"} />
              </div>
              <div className="flex-fill">
                <Skeleton height={"50px"} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsLoader;
