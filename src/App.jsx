import React, { lazy, Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const SolutionUrl = lazy(() => import("./solution/SolutionUrl"));
const HomeUrls = lazy(() => import("./home/HomeUrls"));
import Preloaders from "./components/Preloaders";
function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Preloaders/>}>
          <Routes>
            <Route path="home/*" element={<HomeUrls />}></Route>
            <Route path="/*" element={<SolutionUrl />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
