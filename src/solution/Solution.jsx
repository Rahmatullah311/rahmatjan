import React, { lazy, Suspense } from "react";
import BasicCard from './components/BasicCard.jsx'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ContentSTrimer, TitleSTrimer } from "../components/CustomUtils.js";
import { fetchSolutionData } from "./solutionSlice";
import SolutionsLoader from "./loaders/SolutionsLoader.jsx";

const Solution = () => {
  const dispatch = useDispatch();
  const solutionData = useSelector((state) => state.solution.solutionData);
  const loading = useSelector((state) => state.solution.isLoading);
  useEffect(() => {
    dispatch(fetchSolutionData());
  }, []);
  return (
    <div className="container-fluid">
      {loading ? (
        <SolutionsLoader />
      ) : (
        <div>
          <h1>Solutions Collection</h1>
          <div className="d-flex gap-3">
            {solutionData &&
              solutionData.map((item) => (
                <BasicCard
                  key={item.slug}
                  title={TitleSTrimer(item.title)}
                  slug={item.slug}
                  content={ContentSTrimer(item.summary)}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Solution;
