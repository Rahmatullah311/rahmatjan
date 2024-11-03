import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchSolutionDetails } from "./solutionSlice";
import Markdown from "markdown-to-jsx";
import Code from "./Code";
import Formatter from "../formatter/Formatter";

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
    <div className="container">
      <p>{slug}</p>
      <h1>{solutionDetails.title}</h1>
      <div className="">
        <Markdown
        className="p-4"
        style={{width: '100%', maxWidth: '100vw'}}
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
  );
};

export default SolutionDetail;
