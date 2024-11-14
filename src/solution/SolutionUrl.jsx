import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import WebLayout from "../layouts/WebLayout";

const Solution = lazy(() => import("./Solution"));
const SolutionDetail = lazy(() => import("./SolutionDetail"));
import SolutionsLoader from "./loaders/SolutionsLoader";

const SolutionUrl = () => {
  return (
    <WebLayout>
      <Suspense fallback={<SolutionsLoader/>}>
        <Routes>
          <Route path="/" element={<Solution />} />
          <Route path="/:slug" element={<SolutionDetail />} />
        </Routes>
      </Suspense>
    </WebLayout>
  );
};

export default SolutionUrl;
