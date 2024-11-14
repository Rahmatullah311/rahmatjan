import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";

// Lazy load components
const WebLayout = lazy(() => import("../layouts/WebLayout"));
const HomePage = lazy(() => import("./HomePage"));

const HomeUrls = () => {
  return (
    <Suspense fallback={<div>Loading Layout...</div>}>
      <WebLayout>
        <Suspense fallback={<div>Loading Home Page...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
      </WebLayout>
    </Suspense>
  );
};

export default HomeUrls;
