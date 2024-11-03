import React from "react";
import { Routes, Route } from "react-router-dom";
import WebLayout from "../layouts/WebLayout";
import Solution from "./Solution";
import SolutionDetail from "./SolutionDetail";

const SolutionUrl = () => {
  return (
    <WebLayout>
      <Routes>
      <Route path="/" element={<Solution />} />
      <Route path="/:slug" element={<SolutionDetail />} />
      </Routes>
    </WebLayout>
  );
};

export default SolutionUrl;
