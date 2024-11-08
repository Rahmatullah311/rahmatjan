import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchSolutionDetails } from "./solutionSlice";
import Markdown from "markdown-to-jsx";
import Formatter from "../formatter/Formatter";
import { Comment } from "@mui/icons-material";
import { Divider } from "@mui/material";

const SolutionDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const solutionDetails = useSelector(
    (state) => state.solution.solutionDetails
  );
  useEffect(() => {
    dispatch(fetchSolutionDetails(slug));
  }, [slug]);
  return (
    <div className="row">
      <div className="col-sm-8">
        <div className="container">
          <p>{slug}</p>
          <h1>{solutionDetails.title}</h1>
          <div className="">
            <Markdown
              className="p-4"
              style={{ width: "100%", maxWidth: "100vw" }}
              options={{
                overrides: {
                  Code: {
                    component: Formatter,
                    props: {
                      className: "text-danger",
                    },
                  },
                },
              }}
            >
              {solutionDetails.content}
            </Markdown>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="py-2">
          <h2>
            <Comment />
            <span>&nbsp;</span>
            users comments
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SolutionDetail;
